let isDone: boolean = false;
let num: number= 0;
let hexLiteral: number = 0xf00d;
let myName: string = 'jingchengyideng';

function alertNamme(name: string): string {
    return '测试' + name;
}
alertNamme('老袁');
function alertName(): void {
    alert('测试')
}

let unusable: void = undefined;

function getString(something: string | number): string{
    return something.toString();
}

getString('文本');

enum Days {
    Sun = 7,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}
console.log('1',Days['Sun']);

interface Person {
    readonly id: number;
    uname ?: string;
    age: number;
    [proName: string]: any;
}
const laoyuan: Person = {
    id: 30,
    age: 20,
}

laoyuan['xx'] = 30;