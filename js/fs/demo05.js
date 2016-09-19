"use strict"

/*
 * 同步写入文件
 */
var fs = require('fs');
try{
	var data = 'Hello,Node.js';
fs.writeFileSync('../../output2.txt',data);
}catch(e){
	console.log('failed!')
}
console.log('ok')