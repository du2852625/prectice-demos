// 已有数组
let arr: number[] = [1,2,2];
let arr2:Array<number>;
let arr3 = new Array<number>(4);
console.log(arr3.length);
interface NumberArray {
    [index: number]: number;
}
let arr4: NumberArray = [1,2,2];

// 类数组
function sum(){
    let args: IArguments = arguments;
    // args.callee();
}

// 元组
let tuple1: [number, string, boolean] = [1, '测试', false];

// 区别
function useFetch(){
    const response: string = '京城一灯';
    const age: number = 30;
    // return [response, age] as const;
    // return [response, age]
    return tuplify(response, age);
}
function tuplify<T extends unknown[]>( ...elements: T): T{
    return elements;
}

const [response] = useFetch()