var bf1=new Buffer('ABC');
var bf2=new Buffer('ABCD');
var bf3=bf1.compare(bf2);
if(bf3<0){
	console.log(bf1+'在'+bf2+'之前');
}else if(bf3==0){
    console.log(bf1+'在'+bf2+'相同');
}else{
    console.log(bf1+'在'+bf2+'之后');
}
