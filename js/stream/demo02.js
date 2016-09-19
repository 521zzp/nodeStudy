"use strict"

/*
 * 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。
 * 一个Readable流和一个Writable流串起来后，
 * 所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
 * 
 * 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。
 * 
 * 让我们用pipe()把一个文件流和另一个文件流串起来，
 * 这样源文件的所有数据就自动写入到目标文件里了，
 * 所以，这实际上是一个复制文件的程序：
 */
var fs = require('fs');

var rs = fs.createReadStream('../../sample.txt');
var ws = fs.createWriteStream('../../output5.txt');

rs.pipe(ws);
