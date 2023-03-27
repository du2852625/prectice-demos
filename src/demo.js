/**
 * 1.抽象类可以具体实现 也可以定义抽象方法
 * 2.方法修饰符
 * public 共有的 任何地方都可以访问到
 * privat 私有的 不能在类的外部使用 也就是说内部使用
 * protected 保护的子类中是可以使用的
 * 3.
 */
// abstract class Animal {
//     abstract makeSound(): void;
//     public move(): void {
//         console.log('animalmove');     
//     }
//     private move1(): void {
//         console.log('animalmove1');     
//     }
// }
// // 类即可是实体类 也可以是个类型
// class Dog extends Animal {
//     #region: string; 
//     constructor() {
//         super();
//         this.#region = '测试私有';
//     }
//     private uname: string = 'jingchengyideng';
//     makeSound() {
//         this.move();
//         console.log('wangwangwang');     
//     }
// }
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Demo_num;
// const dog: Animal = new Dog();
// dog.move();
// dog.makeSound();
var Demo = /** @class */ (function () {
    function Demo() {
        // private num: number;
        _Demo_num.set(this, void 0);
        __classPrivateFieldSet(this, _Demo_num, 20, "f");
    }
    return Demo;
}());
_Demo_num = new WeakMap();
var s = new Demo();
console.log(s.num);
