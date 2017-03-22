var serve = require("./server");
var route = require("./route");
var requestHandlers = require("./requestHandlers");

var hander = {
    "/": requestHandlers.start,
    "/start":requestHandlers.start,
    "/upload":requestHandlers.upload
};

serve.start(route.route,hander);