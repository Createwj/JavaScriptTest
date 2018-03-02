// ---- 创建对象

// 工厂模式创建对象
function createPerson(){
    let o = new Object();
    o.name='bob'
    o.serName = function(){
        return this.name
    }
    return o;
}
console.log(createPerson())


// 构造函数
function creP(name){
    this.name=name
    this.setName=function(val){
        this.name=val
    }
}
let a = new creP('bob')
console.log(a.name)


// 原型上创建对象
function person(){}
person.prototype.name = 'bobs'
let v = new person()
console.log(v.name)


//工厂模式加构造模式
function per(name,age){
    this.name = name
    this.age = age
}
per.prototype = {
    constructor:per,
    getName:function(){
        console.log(this.name)
        return this.name;
    }
}
console.log(new per('a','b').getName())



//  原型链 ES5
function father(){
    this.fVal = true;
}
father.prototype.getfVal = function(){
    return this.fVal
}
function son(){
    this.sVal = true;
}

son.prototype = new father()   // son的原型链继承 father

son.prototype.getsVal = function(){
    return this.sVal
}

let aaa = new son()
console.log(aaa.getfVal())  // 继承之后调用父的方法


//  原型链 ES6

