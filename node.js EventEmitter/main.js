var EventEmitters=require('events').EventEmitter;
var event = new EventEmitters();
event.on('some_event',function(){
   console.log('some_event事件触发');
});
setTimeout(function(){
	event.emit('some_event')
},4000);