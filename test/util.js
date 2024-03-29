var util = require('util'); 


// util.inherits
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 

// util.inspect

function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
        return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 

// util.isArray(object)
console.log(util.isArray([]));
  // true
console.log(util.isArray(new Array));
  // true
console.log(util.isArray({}));
  // false

//   util.isRegExp(object)

console.log(util.isRegExp(/some regexp/));
  // true
console.log(util.isRegExp(new RegExp('another regexp')));
  // true
console.log(util.isRegExp({}));
  // false