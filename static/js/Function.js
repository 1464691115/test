window.onload = function () {
    // 学习时间 2019.3.30 10:48
    // Function 类型 P110

    //  函数声明与函数表达式
    //解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁
    //解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）
    //至于函数表达式，则必须等到解析器执行到她所在的代码行，才会真正的被解释执行
    console.log(sum(10, 29)); // 39 

    function sum(num1, num2) { // 函数声明
        return num1 + num2;
    }

    // console.log(sum1(10, 29)); // TypeError: sum1 is not a function 报错

    var sum1 = function (num1, num2) { // 函数表达式
        return num1 + num2;
    }

    console.log(sum1(10, 29)); // 39
    // 这么同时使用函数声明和函数表达式也是可以的，只不过，这种语法在Safari中会导致错误
    // 所以还是老实是用第一种  function sum(){} 这种函数声明的方式把


    //  作为值的函数
    //因为ECMAScript中的函数名本身就是变量，所以函数也可以作为值来使用
    //也就是说，不仅可以像传递参数一样把一个函数传递给另一个函数
    //而且可以将一个函数作为另一个函数的结果返回

    //这个函数接受两个参数。第一个参数应该是一个甘薯，第二个参数应该是要传递给该函数的一个值
    function callSomeFunction(someFunction, someArgument) {
        return someFunction(someArgument);
    }

    function add10(num) {
        return num + 10;
    }

    var result1 = callSomeFunction(add10, 10);
    console.log(result1); //20

    function getGreeting(name) {
        return "Hello, " + name;
    }

    var result2 = callSomeFunction(getGreeting, "张三");
    console.log(result2); //Hello, 张三


    //当然，可以从一个函数中返回另一个函数，而且这也是极为有用的一种技术
    function createComparisonFunction(propertyName) {
        return function (object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];

            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    var data = [{
        name: "zhangsan",
        age: 29
    }, {
        name: "lisi",
        age: 35
    }, {
        name: "liukesen",
        age: 17
    }, {
        name: "liuzhenwen",
        age: 3
    }];
    data.sort(createComparisonFunction("name"));
    console.log(data[0].name); // lisi
    data.sort(createComparisonFunction("age"));
    console.log(data[0].age); // 3

    //  函数内部属性
    //在函数内部，有两个特殊的对象：arguments 和 this.
    //arguments的主要用途是保存函数参数，但这个对象还有一个名叫callee的属性
    //该属性是一个指针，指向有用这个arguments对象的函数。
    //请看下面这个非常经典的阶乘函数
    function factorial(num) {
        if (num <= 1) {
            return 1;
        } else {
            // return num * factorial(num - 1);
            //这个函数的执行与函数名factorial紧紧耦合在了一起。为了消除这种紧密耦合的现象
            //可以像下面这样使用argument.callee
            return num * arguments.callee(num - 1);

        }
    }
    console.log(factorial(4)); // 24

    //  函数属性和方法
    //每个函数都有两个属性： length 和 prototype .
    //其中，length 属性表示函数希望接受的命名参数的个数。
    function sayName(name) {
        alert(name);
    }

    function sum1(num1, num2) {
        return num1 + num2;
    }

    function sayHi() {
        alert('hi');
    }

    console.log(sayName.length); //1
    console.log(sum.length); //2
    console.log(sayHi.length); //0

    // 情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window
    function a() {
        var a = 10;
        console.log(this.a); //undefined
        console.log(this); //Window
    }

    a();
    // 情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
    var o1 = {
        a:10,
        b:{
            a:12,
            fn:function(){
                console.log(this.a); //12
            }
        }
    }

    o1.b.fn();
    // 情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象，
    var o2 = {
        a:10,
        b:{
            fn:function(){
                console.log(this.a); //undefined
            }
        }
    }

    o2.b.fn();
    //一句话   this 永远指向的是最后面调用它的对象
}