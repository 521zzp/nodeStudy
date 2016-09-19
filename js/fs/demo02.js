"use strict"
/*
 * 异步读取二进制文件,图片
 */
var fs = require('fs');

fs.readFile('../../img/2.jpg',function (err,data) {
	if (err) {
		console.log(err);
	} else{
		console.log(data);
		console.log(data.length+'bytes');
	}
});
