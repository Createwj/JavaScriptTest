// 数据属性
let person = {
    name : 'Bob'
}
Object.defineProperty(person,'name',{
    configurable:false,             // 该属性是否可以通过delete删除
    writable: false,   //  不可改变
    enumerable:false,               //for in循环无法读取
    value: 'Bob'        // 读取的时候位置
})
person.name='a'
delete person.name
console.log(person.name+'--')
for(key in person){
    console.log(key)
}


//访问器属性
let book = {
    _year : 2004,
    edition: 1
}
Object.defineProperty(book,"year",{
    get:function () {
        return this._year;
    },
    set:function(newVal){
        if(newVal > 2004){
            this._year = newVal;
            this.edition = newVal - 2004;
        }
    }
})

// 定义多个属性
let books = {}
Object.defineProperties(books,{
    _year: {
        value: 2014
    },
    edition:{
        value:1
    },
    year: {
        get:function(){
            return this._year
        },
        set:function(newVal){
            if(newVal > 2014){
                this._year = newVal
                this.edition = newVal - 2014
            }
        }
    }
})
books._year=2016
console.log(books._year)