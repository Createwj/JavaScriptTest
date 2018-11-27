/**
 * any 任意值
**/

let myFavorriteNumber:string = 'seven'
//  myFavorriteNumber = 8  不允许改变数字类型的赋值

let myFavorite:any = 'seven'  // 任意类型
myFavorite = 9

/**
 * any 任意值的属性和方法
**/
let anyThing:any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)
// 也以允许调用方法
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

/**
 * 未声明类型的方法 默认为任意类型
 * **/


let someVal;
someVal = 9
someVal = 'tom'