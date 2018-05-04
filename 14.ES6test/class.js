class Singer {
  constructor({id, name}) {
    this.id = id,
      this.name = name,
      this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000.jpg?max_age=2592000`
  }
}
var b = []
var a = new Singer({
  id: 123,
  name: '121'
})
b.push(a)
var c = [{id:123,name:321}]
console.log(b[0].id)
console.log(c)
console.log('\u{20BB7}')

console.log('----------数组的扩展----------')
let aa = [1,2,3,4,5]
console.log(...aa)

// 合并数组
// const a1 = [1, 2];
// // 写法一
// const a2 = [...a1];
// // 写法二
// const [...a2] = a1;


console.log('-----对象的合并-------')

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target) // {a:1, b:2, c:3}


console.log('-----Math对象取整数-------')

Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0


console.log('-----Math对象取判断>0  <0-------')

Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN


console.log('-----proxy的使用方法-------')
// http://es6.ruanyifeng.com/#docs/proxy#%E6%A6%82%E8%BF%B0
// 代理器的意思对外界的数据进行过滤筛选
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1
++obj.count


console.log('--------- Iterator 和 for-of -----------')
/*http://es6.ruanyifeng.com/#docs/iterator
*  Iterator作用
*  1。为各种数据结构，提供一个统一的、简便的访问接口
*  2。使得数据结构的成员能够按某种次序排列
*  3。ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
*/
console.log('---------Generator 函数---------')
//http://es6.ruanyifeng.com/#docs/generator#%E7%AE%80%E4%BB%8B

console.log('---------class用法---------')

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
let as = new Point(1,2)
console.log(as.toString())


console.log('---------class继承-----------')

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

//注意 在子类中调用父类的方法的时候  必须使用super关键词 否则的不大this  新建对象的时候会报错
// instanceof
// http://es6.ruanyifeng.com/#docs/decorator

//装饰器用到的地方并不多
// @testable
class MyTestableClass {
  // ...
}












