const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf,0x10]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);


const buf4 = Buffer.from([1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
buf4.toString("hex");
console.log(buf4);
