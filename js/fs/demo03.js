"use strict"

/*
 * 同步读取文件，不需要回调函数
 */
var fs = require('fs');

//可以用try-catch包含可能发生异常的部分
try{
	var data = fs.readFileSync('../../sample.txt','utf-8');

	console.log(data);
}catch(e){
	console.log('读取文件失败');
}

