"use strict"
/*
 * 图片复制
 */

var fs = require('fs');

fs.readFile('../../img/2.jpg',function (err,data) {
	if (err) {
		console.log('read pic failed!');
	} else{
		fs.writeFile("../../img/copy.jpg",data,function (err) {
			if (err) {
				console.log('file wirte failed!');
			} else{
				console.log('file write ok');
			}
		})
	}
})
