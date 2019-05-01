/**
 *  第七章 函数表达式
 *      学习时间：2019-5-1 19:42
 */

//定义函数方式
// 1.函数声明
function functionName(arg0, arg1, arg2) {
    //函数体
    console.log("你好");
}
// 关于函数声明，他的一个重要特征就是 函数声明提升（function declaration hoisting）
// 意思是在执行代码之前就会先读取函数声明。这就意味只可以把函数声明放在调用它的语句后面。

// 2.函数表达式
var functionName = function (arg0, arg1, arg2) {
    //  函数体
    console.log("嗯！谢谢");
};
// 创建一个函数并将它赋值给变量 functionName ，这种情况下创建的函数名叫匿名函数（anonymous function）

// 7.1  递归
// 递归函数是在一个函数通过名字调用自身的情况下构成的
// 没有问题的写法
var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});
console.log(factorial(5)); // 5*4*3*2*1 = 120

// 7.2  闭包
// 闭包是指有权访问函数作用域中的变量的函数
// 创建闭包的常见方式，就是在一个函数内部创建另一个函数
// 由于闭包会携带包含他的函数的作用域，因此会比其他函数占用更多的内存。
// 过度使用闭包可能会导致内存占用过多。