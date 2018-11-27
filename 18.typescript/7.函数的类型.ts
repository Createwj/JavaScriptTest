/**
 * 函数的类型
 * **/
function sum(x:number,y:number):number{
    return x + y
}

sum(1,2)

// sum(1,2,3) sum(1)  // 输入多余的参数 回报错

let add = function(x:number,y:number):number{
    return x + y
}
add(1,2)


let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
mySum(1,2)


/**
 * 用接口定义函数的形状  ----=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * **/

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}


/**
 * 可选参数
 * **/
function buildName(firstName:string,lastName?:string){
    if(lastName){
        return lastName
    }else{
        return firstName+lastName
    }
}
let tom = buildName('bob','top')
let bob = buildName('gou')
console.log(tom,bob)




/**
 * 参数默认值
 * **/

function fn(first:string = 'tom',last:string = 'bob'){
    return first+last
}
fn()



/**
 * 剩余参数
 * **/

function fnpush(array,...items){
    items.forEach(function(item){
        array.push(item)
    })
}

let a = []
fnpush(a,1,2,3,4)   // 1,2,3,4多余的参数 在函数内部进行处理



/// 重载

// 重载允许函数接受不同类型的参数时 做出不同的处理

function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


