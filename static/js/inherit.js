window.onload = function () {
    // 继承 
    // 原型链
    function dadType(){}
    // dadType.prototype = function() {
    //     getDadValue : 
    // }

    function sonType() {
        this.sonColor = "yellow";
    }
    sonType.prototype = new dadType();
    sonType.prototype.getSonValue = function () {
        return this.sonColor;
    };
    var instance = new sonType();
    alert(instance.getSonValue());
    // function SuperType(){
    //     this.property = true;
    // }
    // SuperType.prototype.getSuperValue = function(){
    //     return this.property;
    // };
    // function SubType(){
    //     this.subproperty = false;
    // }

    // SubType.prototype = new SuperType();

    // SubType.prototype.getSubValue = function(){
    //     return this.subproperty;
    // };

    // var instance = new SubType();
    // alert(instance.getSuperValue());
}