"use strict"
/*
 * 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
 */
var fs = require('fs');

var ws1 = fs.createWriteStream('../../output3.txt','utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END');
ws1.end();

var ws2 = fs.createWriteStream('../../output4.txt');
ws2.write(new Buffer('使用Stream 写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end();