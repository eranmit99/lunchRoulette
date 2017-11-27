'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();


class Diner {

    static *addDiner(ctx, next) {

        const dinerData = this.request.body;

        let cUsers = null;

        yield models.Diner.find({email: new RegExp(dinerData.email, 'i') }, (err, user)=> {
            cUsers = user;
        })

        if (cUsers.length > 0) {
            this.status = 500;
            this.body = 'user already exist ';
            return;
        }

        const dinerSchema = new models.Diner(dinerData);

        try {
            yield dinerSchema.save();
            this.body = 'success';
        }
        catch (err) {
            this.status = err.status || 500;
            this.body = err.message;
        }
    }

    static *getDiner() {

        const dinerData = this.request.body;
        let cUsers = null;

        yield models.Diner.find({email: new RegExp(dinerData.email, 'i') }, (err, user)=> {
            cUsers = user;
        })

        this.body = cUsers;
    }


}


module.exports = Diner;