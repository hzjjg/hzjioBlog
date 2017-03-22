var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        console.log(pathname);
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(80);
    console.log("serve has started");
}

exports.start = start;

