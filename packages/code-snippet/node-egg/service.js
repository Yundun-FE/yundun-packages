'use strict';

const Service = require('egg').Service;

class ServiceService extends Service {
  async getById(id) {
    const data = await this.Model.findOne({ where: { id } });
    return data;
  }
}

module.exports = ServiceService;
