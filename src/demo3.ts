//1.不要去混淆ES6和TS中 =>
let myNum: (x:number, y:number) => number = function (
    x:number,
    y:number
    ): number {
    return x + y;
}

// 2.函数默认参数

function buildName(firstName:string, lastName: string = 'cat'): string {
    return firstName + lastName;
}

// 3.剩余参数
function push(array: any[], ...items: any[]){
    items.forEach((item)=> {
        array.push(item);
    })
}
let a = [4];
push(a, 1 ,2 ,3);
console.log('a: ', a);

// 4.可选参数 必须放在后面
function buildName1(lastName: string, firstName ?:string ): string {
    if(firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
const tom = buildName1('Tom', 'cat');