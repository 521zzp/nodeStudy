"use strict"

/*
 * 异步读取文本文件，字符集为utf-8
 */
var fs = require('fs');

fs.readFile('../../sample.txt','utf-8',function (err,data) {
	if (err) {
		console.log(err);
	} else{
		console.log(data);
	}
})
