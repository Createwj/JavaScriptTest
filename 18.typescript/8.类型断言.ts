/**
 * 类型断言  判断参数的类型
 * https://ts.xcatliu.com/basics/declaration-files.html
 * **/
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}