var fs = require("fs");
var data = '';

var readStream = fs.createReadStream("input.txt");

readStream.setEncoding("UTF8");

readStream.on("data",(chunk)=>{
    data += chunk;
})
readStream.on("end",()=>{
    console.log(data);
})
readStream.on("error",(err)=>{
    console.log(err.stack);
})
console.log("END");





