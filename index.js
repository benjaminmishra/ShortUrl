'use strict'

const os = require("os");
const fs = require("fs");
const biku = require("./biku.json");
const router = require("./router");

const http = require("http");

let request_handler = function (request) {
    router.route_handler(request.url);
};

let server = http.createServer(function(request,response){
    console.log("request received")
    console.log(request.method);
    console.log(request.url);

    request_handler(request);


    response.setHeader("Content-Type","text/json");
    //response.write(JSON.stringify(biku));
    response.write(request.method +" : "+ request.url);
    response.end();
});



server.listen(3000,function(){
    console.log("listning at port 3000");
});

