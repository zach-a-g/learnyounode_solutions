`use strict`

// Require the module
mymodule = require("./mymodule");

// Create terminal variables
const dir = process.argv[2],
    ext = process.argv[3];

// Call the module as a function
mymodule(dir, ext, function(err, list) {
    if (err)
        throw err;

    // take all files from the module function
    list.forEach(function(file) {
        console.log(file);
    });
});

// Answer from program: 

// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })