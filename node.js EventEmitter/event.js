var EventEmitters=require('events').EventEmitter;
var event = new EventEmitters();
event.on('someEvent',function(arg1,arg2){
   console.log('listener1',arg1,arg2);
});
event.on('someEvent',function(arg1,arg2){
   console.log('listener2',arg1,arg2);
});
event.emit('someEvent','ar1参数','ar2参数')
