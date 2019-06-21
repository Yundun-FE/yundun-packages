'use strict';

const Service = require('egg').Service;

class ServiceService extends Service {
  constructor(ctx) {
    super(ctx);
    // this.Model = ctx.model.;
  }

  async create(data) {
    const result = await this.Model.create(data);
    return { id: result.id };
  }

  async deleteById(id) {
    await this.Model.destroy({
      where: {
        id,
      },
    });
    return { id };
  }

  async updateById(id, data) {
    await this.Model.update(data, {
      where: { id },
    });
    return data;
  }

  async list(where) {
    const list = await this.Model.findAll({
      // attributes: [],
      ...this.ctx.helper.pagination(),
      order: [[ 'id', 'DESC' ]],
      where,
    });
    const total = await this.Model.count({ where });
    return { list, total };
  }

  async getById(id) {
    const data = await this.Model.findOne({ where: { id } });
    return data;
  }
}

module.exports = ServiceService;
