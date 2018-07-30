'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let {
            ctx,
            app
        } = this;
        this.ctx.body = await ctx.service.a.index();
    }
}

module.exports = HomeController;