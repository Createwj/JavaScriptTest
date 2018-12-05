// typeof 判断类型

// 可以识别--- Number  String  boolean  undefined  Symbol function
// 无法识别--- object null Array
console.log(typeof 1)  //Number
console.log(typeof 'a')  //String
console.log(typeof false)  //boolean
console.log(typeof undefined)  //undefined
console.log(typeof null)  // null
console.log(typeof Symbol('foo'));  // Symbol
console.log(typeof [])  // Array
console.log(typeof {})  // Object
console.log(typeof function(){})

// instanceof


//constructor
//---无法识别null  undefined  判断的时候 会报错

console.log(true.constructor)
let a = 2;
console.log(a.constructor)
let b = 'a';
console.log(b.constructor)
let c = Symbol('b')
console.log(c.constructor)
let d = function(){}
console.log(d.constructor)
let e = {}
console.log(e.constructor)
let i = []
console.log(i.constructor)
/**
 ---- constructor无法识别undefined  null
 **/
// let f = undefined
// console.page(f.constructor)
// let g = null
// console.page(g.constructor)



//Object.prototype.toString.call

console.log(toString.call(1))
console.log(toString.call('1'))
console.log(toString.call(false))
console.log(toString.call(null))
console.log(toString.call(undefined))
console.log(toString.call(function(){}))
console.log(toString.call({}))
console.log(toString.call([]))



//JQ    $.type
// console.page($.type(1))
// console.page($.type('1'))
// console.page($.type(false))
// console.page($.type(null))
// console.page($.type(undefined))
// console.page($.type([]))
// console.page($.type({}))
// console.page($.type(function(){}))