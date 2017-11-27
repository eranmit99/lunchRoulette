'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();


class Diner {

    static *addDiner(ctx, next) {

        const dinerData = this.request.body;
        const dinerSchema = new models.Diner(dinerData);

        let cUsers = null;

        yield models.Diner.find({email: new RegExp(dinerData.email, 'i') }, (err, user)=> {
            cUsers = user;
        })

        if (cUsers.length > 0) {
            this.status = 500;
            this.body = 'user already exist ';
            return;
        }

        try {
            yield dinerSchema.save();
            this.body = 'success';
        }
        catch (err) {
            this.status = err.status || 500;
            this.body = err.message;
        }
    }


}


module.exports = Diner;