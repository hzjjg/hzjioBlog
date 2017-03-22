function route(handle,pathname,response){
    console.log("about a route to request fo" + pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname](response);
    }else{
        console.log("no request hander found for" + pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 no found");
        response.end();
    }
}

exports.route = route;