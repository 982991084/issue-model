'use strict';

const Service = require('egg').Service;

class AService extends Service {
    async index() {
        let {
            ctx,
            app
        } = this;
        return await ctx.service.otherService.b.get();
    }
}

module.exports = AService;