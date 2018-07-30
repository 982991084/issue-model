'use strict';

const Service = require('egg').Service;

class BService extends Service {
    async get() {
        return 123;
    }
}

module.exports = BService;