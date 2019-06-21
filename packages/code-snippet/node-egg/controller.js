'use strict';

const Controller = require('egg').Controller;

class Controller extends Controller {
  constructor(ctx) {
    super(ctx);
    // this.Service = this.service.develop.accounts;
  }

  async create() {
    const data = this.ctx.request.body;

    const create = {
      name: data.name,
    };
    this.ctx.body = await this.Service.create(create);
  }

  async destroy() {
    const { id } = this.ctx.params;
    this.ctx.body = await this.Service.deleteById(id);
  }

  async update() {
    const { id } = this.ctx.params;
    const data = this.ctx.request.body;

    const update = {
      name: data.name,
    };

    this.ctx.body = await this.Service.updateById(id, update);
  }

  async index() {
    // const { name } = this.ctx.query;
    const where = this.ctx.helper.clearnDef({
      // name,
    });
    this.ctx.body = await this.Service.list(where);
  }
}

module.exports = Controller;
