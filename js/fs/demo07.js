"use strict"
/*
 * 如果我们要获取文件大小，创建时间等信息，
 * 可以使用fs.stat()，它返回一个Stat对象，
 * 能告诉我们文件或目录的详细信息
 * 
 * 
 * stat()也有一个对应的同步函数statSync()，
 * 写法参考前面的文件操作
 */
var fs = require('fs');

fs.stat('../../img/copy.jpg',function (err,stat) {
	if (err) {
		console.log(err);
	} else{
		//是否是文件
		console.log('isFile:'+stat.isFile());
		//是否是目录
		console.log('isDirectory:'+stat.isDirectory());
		if (stat.isFile()) {
			//获取文件大小
			console.log('size'+stat.size);
			//创建时间，Data对象
			console.log('birth time:'+stat.birthtime);
			//修改时间，Data对象
			console.log('modified time:'+stat.mtime);
		} 
	}
})
