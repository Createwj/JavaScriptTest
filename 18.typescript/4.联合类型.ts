/**
 * 联合类型
 * **/
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

/**
 * 访问联合类型的属性和方法
 * **/
//当ts不确定联合属性的变量到底是哪一个的时候  只能使用联合类型里所有属性的方法

//报错 只有string才有length属性
function getLength(something: string | number): number {
    return something.length;
}

//getString 不会报错 number string都会有toString这个属性
function getString(something: string | number): string {
    return something.toString();
}