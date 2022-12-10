var bufer1 = Buffer.from('asd');
var buf2 = Buffer.from('123')

console.log(buf2.toString());
console.log(buf2.compare(bufer1));
console.log(Buffer.concat([bufer1,buf2]).toString());