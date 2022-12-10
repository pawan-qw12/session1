var http = require('http');

/**
 * form action = /user
 * req:{ name:user , email:}
 * response :{
 * statuds 
 * server
 * 
 * }
 */

var startServer1 = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('this is test response');
    res.end();
})

var startServer2 = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('this is test response');
    res.end();
})

startServer1.listen(3031,'localhost',function(){
    console.log('server is running at http://localhost:3000');
})

startServer2.listen(5000,'localhost',function(){
    console.log('server is running at http://localhost:5000');
})

