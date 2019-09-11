var events = require("events");

var eventEmitter = new events.EventEmitter();

var lst1 = function lst1(){
    console.log("lst1执行");
}

var lst2 = function lst2(){
    console.log("lst2执行");
}

eventEmitter.addListener("connection",lst1);
eventEmitter.on("connection",lst2);

var lstcount = eventEmitter.listenerCount("connection");
console.log("监听事件数量："+lstcount);

eventEmitter.emit("connection");

eventEmitter.removeListener("connection",lst1);
console.log("移除lst1事件监听");

lstcount = eventEmitter.listenerCount("connection");
console.log("监听事件数量："+lstcount);

console.log("程序执行完毕。");


