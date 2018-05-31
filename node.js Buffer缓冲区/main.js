var buf=new Buffer(22);
var len=buf.write('www.baidu.com');
console.log('写入字符数',len)
console.log('buf',buf)
console.log('bufJson',buf.toJSON(buf))
