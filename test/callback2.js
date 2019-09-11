var fs = require("fs");
fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log(data.toString());
})
console.log("程序执行结束!");