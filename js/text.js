process.nextTick(function () {
	console.log('nextTick callback');
});
process.on('exit',function(code){
	console.log('about to exit with code'+code);
});

if (typeof(window)==='undefined') {
	console.log('node.js');
} else{
	console.log('browser');
}

console.log('nextTick was set!');
console.log('nextTick was set once again!');