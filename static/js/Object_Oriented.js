window.onload = function () {
    // 学习时间 2019.3.31 18:28
    // 面向对象的程序设计 类型 P138

    //1.理解对象
    var person = new Object();
    person.name = "张三";
    person.age = 29;
    person.job = "web";

    person.sayName = function () {
        console.log(this.name);
    }

    //用对象字面量语法也可以写成这样：
    var person1 = {
        name: "李四",
        age: 24,
        job: "web",

        sayName: function () {
            console.log(this.name);
        }
    };

    // 1.1 属性类型
    // ECMAScript 中有两种属性：数据属性和访问器属性
    // --数据属性
    // [[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，
    // 或者能否把属性修改为访问器属性。这特性默认值为true

    // [[Enumerable]]：表示能否通过for-in 循环返回属性。像前面例子中那样直接在对象上定义的属性，
    // 这个特性默认值为true

    // [[Writable]]:表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性
    // 这个特性默认值为true 

    // [[Value]]:包含这个属性的数据值。读取属性值的时候，从这个位置读;
    // 写入属性值的时候，把新值保存在这个位置。这个特性的默认值为 undefined

    // 要修改属性默认的特性，必须使用ECMAScript 5的 Object.defineProperty()方法.
    // 这个方法接受3个参数：属性所在的对象、属性的名字和一个描述符对象。
    // 其中，描述符(descriptor)对象的属性必须是：configurable、enumerable、writable、value
    var person3 = {};
    Object.defineProperty(person3, "name", {
        writable: false,
        // 这里 writable为 false 表示这个值 是只读的。这个属性的值是无法修改的
        // 如果尝试为他指定新值，则在非严格模式，赋值操作将被忽略；严格模式下抛出报错   
        configurable: false,
        // 这里configurable 为 false 表示这个值是不能从对象中删除属性
        // 如果对这个属性调用delete，在非严格模式下什么也不会发生，严格模式下导致错误
        // 而且一旦把属性定义为不可配置的，就不能再把它变回可配置了。
        value: "王五"
    });

    console.log("person3:" + person3.name);
    person3.name = "森子";
    console.log("修改后的值：" + person3.name);
    document.getElementById('cc').value = 11;
    alert(document.getElementById('cc').value);
    // 2.创建对象
    // 构造函数问题
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName1 = sayName1;
    }

    function sayName1() {
        console.log(this.name);
        console.log('有点东西');
    }

    var person1 = new Person("张三", 29, "web");
    var person2 = new Person("李四", 23, "web");
    person1.sayName1();
    person2.sayName1();

    // 2.3 原型模式
    function Person2() {}
    Person2.prototype.name = "刘克森";
    Person2.prototype.age = 17;
    Person2.prototype.job = "web";
    Person2.prototype.sayName = function () {
        console.log(this.name);
    };
    Person2.prototype.name = "刘振闻";   //重写
    var person2_3 = new Person2();
    person2_3.sayName();        //刘克森

    var person2_3_1 = new Person2();
    person2_3_1.sayName();      //刘克森

    function liukuan(){}
    liukuan.prototype.name = "刘宽";
    liukuan.prototype.age = 25;
    liukuan.prototype.job = "商贩";
    liukuan.prototype.sayName = function(){
        console.log(this.name);
    }

    var liukuan = new liukuan();
    liukuan.sayName();

    function luoqianqian(){}
    luoqianqian.prototype = {
        name : "罗倩倩",
        age : 23,
        job : "商贩",
        sayName : function(){
            console.log(this.name);
        }
    }
    var luoqianqian = new luoqianqian();
    luoqianqian.sayName();

    function liuhan(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["Shelby","Court"];
    }
    liuhan.prototype = {
        constructor : liuhan,
        sayName : function(){
            console(this.name);
        }
    }
    var lky = new liuhan("刘克勇",21,"school");
    var lks = new liuhan("刘克森",17,"web");

    lky.friends.push("Van");
    console.log("--------------刘家谱--------------");
    console.log(lky.name);
    console.log(lks.name);
    console.log(lky.friends === lks.friends);
    console.log(lky.sayName === lks.sayName);

    function shenchuanping(name,age,job){
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function(){
            console.log(this);
        }
        return o;
    }
    var friend = new shenchuanping("沈传萍",29,"商贩");
    friend.sayName();
}