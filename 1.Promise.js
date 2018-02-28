// http://www.cnblogs.com/lvdabao/p/es6-promise-1.html
// resolve 用法
setTimeout(()=>{console.log("resolve----------")},2000)
function runAsync1(){
    let p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('请求完成1');
            resolve('这是请求返回数据1');
        }, 2000);
    });
    return p;
}
function runAsync2(){
    let p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('请求完成2');
            resolve('这是请求返回数据2');
        }, 2000);
    });
    return p;
}

runAsync1().then((data)=>{
    console.log(data)
return runAsync2()
}).then((data)=>{
    console.log(data)
});

// reject 用法
console.log("Reject----------")
function getRandNum(){
    let p = new Promise((resolve, reject)=>{
        let num = Math.random()*10;
        if(num > 5){
            resolve('请求成功')
        }else{
            reject('请求失败')
        }
    })
    return p
}
getRandNum().then((data)=>{
    console.log("成功" + data)
},(data)=>{
    console.log("失败" + data)
})

// catch 用法
console.log("catch----------")

