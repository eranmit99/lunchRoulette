'use strict';
const fs = require('fs');
const path = require('path');


module.exports =  () => {

    // Require all model files in the directory.
    let rModelFile = /\.model\.js$/;
    let currentModels = {};

    fs.readdir(__dirname, (err, files)=> {
        if (err) {
            throw err;
        }

        files.filter((file) => {
            return rModelFile.test(file);
        }).forEach((file) => {
            // set model name according to the file name
            let schemaName = file.split('.')[0];
            currentModels[schemaName] = require(path.join(__dirname, file));
        });
    });

    // return all models in an object
    return currentModels;
};