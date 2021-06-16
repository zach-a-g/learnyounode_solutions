`use strict`

const fs = require("fs");
const path = require("path");

// exporting the module 
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if (err)
            return callback(err);

        // return just the files with the ext
        list = list.filter(function(file) {
            return path.extname(file) === '.' + ext;
        });

        callback(null, list);
    });
};

// Answer:

// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }