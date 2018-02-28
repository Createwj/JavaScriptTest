// Object.assign 合并多个对象
//如果多个对象 具有相同属性  后面覆盖前面

//export default  导出函数引入的时候 不需要加{}
//export   需要加{}

console.log('浅拷贝 合并对象 Object.assign')
let arr = {"aa":11,"bb":22}
let data = Object.assign({},arr,{
    "a":1,
    "b":2
});
let dat = Object.assign({},arr);
console.log(data)
console.log(dat)

console.log(arr.aa)
//深度拷贝
brr = JSON.parse(JSON.stringify(arr));
arr.aa = 21
console.log(arr.aa)
console.log(brr.aa)