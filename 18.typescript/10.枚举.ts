/**
 * 枚举 用于取值被限定在一定范围内的场景值
 * **/
enum Days  {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true



// 手动赋值 用于过滤的时候比较方便

enum finter {sun='tom',mat='bob'}
console.log(finter['sun'])


// 常数枚举
const enum Dir {
    Up,
    Down,
    Left,
    Right
}
let dir = [Dir.Up,Dir.Down,Dir.Left,Dir.Right]


// 外部枚举
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];