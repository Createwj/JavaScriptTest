// http://www.cnblogs.com/lvdabao/p/es6-promise-1.html
//使用webstorm打开  按住Ctrl + Shift + F10 执行代码（部分笔记本按住Fn）
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
    console.log("成功--" + data)
},(data)=>{
    console.log("失败--" + data)
})

// catch 用法
// 当then中方法出现错误的时候  会执行catch中的函数
console.log("catch----------")

getRandNum().then((data)=>{
    console.log("成功--" + data)
    console.log(a)
},(data)=>{
    console.log("失败--" + data)
}).catch((data)=>{
    console.log('catch--' + data)
})

// all方法
console.log('all------')
function runAsync11(){
   let p = new Promise((resolve,reject)=>{
       resolve('1234567890')
   })
    return p
}
function runAsync22(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('runAsync22')
        },200)
    })
    return p
}
function runAsync33(){
    let p = new Promise((resolve,reject)=>{
        resolve('runAsync33')
    })
    return p
}
setTimeout(()=>{
    Promise.all([runAsync11(),runAsync22(),runAsync33()]).then((data)=>{
        console.log(data)
        // data中包括 三个函数返回的响应消息 罗列成一个数组
    })
},5000)