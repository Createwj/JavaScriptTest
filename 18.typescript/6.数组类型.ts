/**
 * 数组的类型
 * **/

// 「类型 + 方括号」表示法

let numberArr:number[] = [1,2,3,4,5,6]
// 数组中不能出现其他类型

//联合数组类型
let numberArrs:(string|number)[] = ['arr',1,2,3,4,5,6]

console.log(numberArrs)

// 数组的一些方法也会随着数组定义的类型进行限制


/**
 * 用接口表示数组
 * **/

interface NumberArr {
    [index:number]:number
}
let fibonacci:NumberArr = [1,2,3,4,4,5,6,6]



/**
 *  any 在数组 中的应用  任意数组类型
 * **/

let list:any[] = [1,'abc',{name:'tom',age:12}]







