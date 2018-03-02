// 匿名函数  闭包

function outer(a){
    let b = 20;
    return function inner(c){
        let d = 40;
        return a*b/(d*c)
    }
}
let x = outer(10);
console.log(x)     // 返回function inner
console.log(x(1))   // 10 *20 / 40 = 5

let counter = (function(){
    let p = 0;
    function changeBy(val){
        p += val;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return p;
        }
    }
})()
console.log(counter.value())      // 获取数值
counter.increment()    // 执行+方法
console.log(counter.value())
counter.decrement()    // 执行-方法
console.log(counter.value())

// 可以将以上闭包赋值给多个变量  形成多个闭包空间  并且各自独立运行

// 循环中使用闭包 ： 常见错误
