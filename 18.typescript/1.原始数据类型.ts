function f(person: string) {
    return 'hello,'+person
}
f('ts')

// 布尔值
let isDone:boolean = false
console.log(isDone)
// let createdByNewBooleans: boolean = new Boolean(1);
let createdByNewBoolean: Boolean = new Boolean(1);
console.log(createdByNewBoolean)

/**
 *
 * 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，
 * 而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。
 *
 * **/


// 数值
let a:number = 12
let b:number = 0x12  // 十六进制
let c:number = 0b10101  // 二进制
let d:number = 0o12  // 八进制
let e:number = NaN
let ff:number = Infinity

console.log(1,b,c,d,e,ff)



// 字符串
let myName:string = 'tom'
let num:number = 123



// 空值
function alertName():void{  // 表示函数没有返回数值
    alert('hahah')
}



// undefine null
let  u:undefined = undefined
let  n:null = null
/**
 *  undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
 * **/


let i:void;



// 