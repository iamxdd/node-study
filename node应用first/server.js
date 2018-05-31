/*引入Required模块*/
var http=require('http')
/*http.createServer()方法创建服务器，并使用listen方法绑定8888端口。*/
http.createServer(function(request,response){
 //发送http头部
 //http状态值：200:ok
 //内容类型：text/plain
 response.writeHead(200,{'Content-Type':'text/plain'});

 //发送响应数据'hello world'
 response.end('hello world \n');
}).listen(8888);

//终端打印如下信息
console.log('aaaaaaaaa')