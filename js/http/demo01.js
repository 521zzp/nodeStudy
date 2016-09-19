"use strict"
/*
 * http模块提供的request和response对象。
 * 
 * request对象封装了HTTP请求，
 * 我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
 * 
 * response对象封装了HTTP响应，
 * 我们操作response对象的方法，就可以把HTTP响应返回给浏览器。
 * 
 */
//导入http模块
var http = require('http');

//创建http server,并传入回调函数
var server = http.createServer(function (request,response) {
	//回调函数接受request和response对象
	//获得HTTP请求的method和url:
	console.log(request.method+':'+request.url);
	//将HTTP响应200写入response,同事设置Content-Type:text/html:
	response.writeHead(200,{'Content-Type':'text/html'});
	//将HTTP响应的HTML内容写入response:
	response.end("<h1>Hello world!</h1>");
});

server.listen(8050);
console.log('Server is running at http://127.0.0.1:8050/');


