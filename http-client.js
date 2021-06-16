`use strict`

const http = require("http");

// The URL I get as the first command line argument
const url = process.argv[2];

// http.get have 3 responses (data, error, end)
http.get(url, function(response) {

    response.setEncoding("utf-8");
    response.on("data", function(data) {
        console.log(data)
    });
});