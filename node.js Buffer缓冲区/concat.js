var bf1=new Buffer('1111');
var bf2=new Buffer('2222');
var bf3=Buffer.concat([bf1,bf2]);
console.log('bf3内容',bf3);