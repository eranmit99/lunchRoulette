'use strict';
const mongoose = require('mongoose');
const path = require('path');
const app = require('koa')();
const qs = require('koa-qs')(app);
const koaBody = require('koa-body');
const send = require('koa-send');

const config = require('./config');


///  **************
let CONNECTION_STRING = config.mongo.connection;

let conn = mongoose.connect(CONNECTION_STRING,{
    useMongoClient: true,
});

let connection = mongoose.connection;
                 mongoose.Promise = Promise;

let router = require('./routes')();
let port = config.server.port;


//register all api controllers routes
app.use(koaBody({formidable: {uploadDir: __dirname}}))
    .use(router.routes())
    .use(router.allowedMethods())

// allow sending static content
app.use(function *(){
    yield send(this, this.path, { root: __dirname + '/public' });
})


app.listen(port, function () {
    console.info('KOA server listening on port %d in %s mode', port, app.env);
});



