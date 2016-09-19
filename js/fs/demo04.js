"use strict"
/*
 * 将数据写入文件是通过fs.writeFile()实现的
 * 
 * writeFile()的参数依次为文件名、数据和回调函数。
 * 如果传入的数据是String，默认按UTF-8编码写入文本文件，
 * 如果传入的参数是Buffer，则写入的是二进制文件。
 * 回调函数由于只关心成功与否，因此只需要一个err参数。
 * 
 * 异步写文件
 */
var fs = require('fs');

var data = 'Hello,Node.js';
fs.writeFile('../../output.txt',data,function (err) {
	if (err) {
		console.log(err);
	} else{
		console.log('ok');
	}
})
