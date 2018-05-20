'use strict'

const fs = require("fs");
const path = require("path");
const http = require("http");


let server = http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);

    let reqUrl = request.url;
    let filePathToServe = '';

    //find the file in fs
    let objParsedPath = path.parse(reqUrl);
    response.setHeader("Content-Type", "text/html");
    filePathToServe = '.' + objParsedPath.dir + objParsedPath.base;

    fs.readFile(filePathToServe, (err, data) => {
        if (err) {
            response.statusCode = 500;
        }
        else {
            response.statusCode = 200;
        }
        response.write(data);
        response.end();
    });

});



server.listen(3000, function () {
    console.log("listning at port 3000");
});