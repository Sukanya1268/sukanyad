
var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/plain'});
    response.end('Hello world\n');
}).listen(5050);
console.log('server running at http://localhost:5050/');