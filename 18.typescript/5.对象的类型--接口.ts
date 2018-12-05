
/**
 * 对象的类型  --  接口
 *
 * 在ts中我们使用interfaces来定义对象的类型
 *
 * 在面向对象的语言中  接口是比较重要的概念 他是对行为的抽象
 *
 * 具体的行动实现是有classes去实现implements
 * */


interface Person {
    name:string;
    age:number;
}

let tom: Person={
    name:'tom',
    age:12
}

/**
 * 在赋值的时候变量的属性和接口必须保持一致
 * **/

// 可选属性

interface Animtion {
    name:string,
    age?:number
}
let cat:Animtion={
    name:'tom'
}
let dag:Animtion={
    name:'dag',
    age:3
}

// 不允许添加未定义的属性


// 任意属性
interface Per {
    name:string,
    age?:number,
    [propName:string]:any    // 任意属性
}

let bob:Per ={
    name:'p',
    gender:'male'
}

// 一旦定义了 任意属性 那么确定属性和可选属性都必须是它的子属性

let bop:Per = {
    name:'w',
    age:23,
    gender:'wer'
}

/**
 * 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
 * **/


// 只读属性
interface People{
    readonly id:number,
    name:string,
    age?:number,
    [propName:string]:any
}

let peop:People={
    id:123,
    name:'people',
    gender:'male'
}

//不允许修改 id属性
peop.id=0987
/// error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.











