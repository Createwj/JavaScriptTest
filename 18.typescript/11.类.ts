/**
 * 传统es6构建函数实现类的概念 通过原型链继承 在es6 中我们使用class
 *
 * 类的概念
 *
 * 类: 定义了一件事物的抽象特点 包含它的属性方法
 * 对象: 类的实现 通过new生成
 * 面向对象:  封装 继承 多态
 * 封装: 将对数据的操作隐藏起来 对外只暴露接口 外界不知道里面的细节  同时保证类外界无法更改对象内部的数据
 * 继承: 子类拥有父类的方法，还有一些更具体的特性
 * 多态:由继承产生不同的类，对同一方法有不同的响应
 * 存取器: 用来改变属性的读取和赋值的行为
 * 修饰符: 限定成员类型的数值
 * 抽象类:提供其他类继承的基础类型，抽象类不允许被实例化，
 * 接口: 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 *
 * **/
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack



class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi());

// 静态方法 静态属性

// typescript中类的用法

// public private 和 protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
