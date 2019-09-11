var http  = require("http");
http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("test1\n");

}).listen(8888);
console.log("localhost:8888");
