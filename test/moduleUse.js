var md = require("./module");
var md2 = require("./moduletwo");



console.log(md+":"+typeof(md));
console.log(md2+":"+typeof(md2));
md.world();
var hello = new md2();
hello.setName('对象'); 
hello.sayHello(); 



