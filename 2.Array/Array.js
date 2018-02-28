// 常用js数组操作技巧
let arr = [1,2,3,4];
console.log(arr)
arr.push(1)       // 追加
console.log(arr)
arr.pop()          // 弹出
console.log(arr)
arr.unshift(2)          // 之前追加
console.log(arr)
arr.shift()         // 之前删除
console.log(arr)

// slice()
console.log(arr.slice(1))
function append(arr, item) {
    var newArr = arr.slice(0); // slice(start, end)浅拷贝数组
    newArr.push(item);
    return newArr;
};
console.log(append(arr,3))
console.log(arr.slice(0))

let array = ['a','b']
array.forEach((val,key)=>{
    console.log(key,val)
})

console.log(arr)
console.log(arr.slice(1))  // 不修改原数组
console.log(arr+ '--')
console.log(arr = arr.splice(0,2).concat(arr)) // 直接操作原数组
console.log(arr)
