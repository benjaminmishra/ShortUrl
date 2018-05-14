'use strict'

const url = require("url");
const path = require("path");

let defaultRoutePattern = /(?:\/{1})(\w+)/gi;
let _controllerName = "",
    _methodName = "",
    _param = "";

/** 
 * Decodes the route and calls the appropiate function according to the url of the incoming request
 * @param string The url string of the incoming request  
*/
let router = function Router(route = "") {
    if (route != "" && route != "/") {
        let arr = [];
        while ((arr = defaultRoutePattern.exec(route)) !== null) {
            console.log(arr[1]);
            routeArr.push(arr[1]);
        }
        //** Consider only the first 3 - ignore rest
        _controllerName = routeArr[0];
        _methodName = routeArr[1];
        _param = routeArr[2];
    }
    else {
        /** 
         * Ignore the parameter 
         */
        _controllerName = "home";
        _methodName = "index";
        _param = null;
    }
}

exports.route_handler = router;