/**
 * 数组合并了相同类型的对象  元组合并了不类型的对象
 * **/

let arr:number[] = [12,3,4,4]  // 相同类型的对象

let xcatliu: [string, number] = ['Xcat Liu', 25];  // 不同类型的对象

let xcatlius: [string, number];
xcatlius[0] = 'Xcat Liu';
xcatlius[1] = 25;

xcatlius.push(true)  // 添加越界的元素的时候 ts会报错