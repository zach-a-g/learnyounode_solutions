`use strict`

//   Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument. 

const fs = require("fs");
const path = require("path");

// Creating variables passed in terminal
const dir = process.argv[2],
    ext = process.argv[3];

// fs.readdir for IO read
const contents = fs.readdir(dir, function(err, list) {
    if (err) throw err;

    // loop to compare and print
    for (let i = 0; i < list.length; i++)
        if (path.extname(list[i]) === "." + ext)
            console.log(list[i]);
});

// Answer: above is correct too

// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })