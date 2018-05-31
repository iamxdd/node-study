var events=require('events')
var EventEmitter=new events.EventEmitter();

//监听器1
var listener1=function(){
	console.log('监听器listener1执行')
};
//监听器2
var listener2=function(){
    console.log('监听器listener2执行')
}

//绑定connection事件

EventEmitter.on('res',listener1);

EventEmitter.on('res',listener2);

var eventListeners=events.EventEmitter.listenerCount(EventEmitter,'res');
console.log(eventListeners+'个监听器连接事件。');

//处理res事件
EventEmitter.emit('res');

//移除解绑定listener1事件
EventEmitter.removeListener('res',listener1);
console.log('listener1不再受监听');

//再一次触发res事件
EventEmitter.emit('res');
var eventListeners=events.EventEmitter.listenerCount(EventEmitter,'res');
console.log(eventListeners+'个监听器连接事件。');

console.log('程序执行完毕')


