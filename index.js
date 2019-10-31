"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 数据类型
 */
// 元组 
var yuanzuobj = {
    a: 1
};
var yuanzu = [1, 'a', { a: 1 }];
// 枚举 不是类型,是类型+值, 可以直接访问, 默认value是数组的index
var Meiju1;
(function (Meiju1) {
    Meiju1["a"] = "222";
    Meiju1[Meiju1["b"] = 2] = "b";
})(Meiju1 || (Meiju1 = {}));
var Meiju2;
(function (Meiju2) {
    Meiju2[Meiju2["a"] = 0] = "a";
    Meiju2[Meiju2["b"] = 1] = "b";
})(Meiju2 || (Meiju2 = {}));
// 没返回值 void
// 包装对象
var baozhuang1 = false;
var baozhuang2 = Boolean('1');
// const baozhuang3: boolean = new Boolean('1');
// 联合类型 类型或者值
var lianheobj = { a: 1 };
var lianhe1 = { a: 1 };
var lianhe2 = 1;
var lianhe3 = '11';
// 类型断言 自信告诉编辑器,它就是这个类型,其实number的length会报错
var leixingduanyan = 1;
// (leixingduanyan as any).length = 1
/**
 * 函数
 * 参数,可选参数, 返回值,默认参数
 */
// 参数,可选参数, 返回值,默认参数
function canshufanhuizhi(canshu, kexuancanshu, morencanshu) {
    if (morencanshu === void 0) { morencanshu = true; }
    // console.log(morencanshu);
}
canshufanhuizhi(1);
canshufanhuizhi(1, 'a');
// const result: number = canshufanhuizhi(1);
canshufanhuizhi(1, 'a', false);
/**
 * 类
 */
// 修饰符: 公共public, 私有private, 子类及自身可以访问protected, 只读readonly
var Lei1 = /** @class */ (function () {
    function Lei1() {
        this.a = 1;
        this.aa = 11;
        this.aaa = 111;
        this.b = 12;
    }
    Lei1.prototype.changeB = function () {
        // this.b  = 2;
    };
    return Lei1;
}());
var Lei2 = /** @class */ (function (_super) {
    __extends(Lei2, _super);
    function Lei2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = _this.aaa;
        return _this;
    }
    return Lei2;
}(Lei1));
var lei1obj = new Lei1();
var lei2obj = new Lei2();
lei2obj.a = 2;
// lei2obj.aa
// lei2obj.aaa
// 抽象类 不能new,里面的抽象方法必须被子类实现
var Lei3 = /** @class */ (function () {
    function Lei3() {
        this.a = 1;
    }
    return Lei3;
}());
// new Lei3();
var Lei4 = /** @class */ (function (_super) {
    __extends(Lei4, _super);
    function Lei4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aa = _this.a;
        return _this;
    }
    Lei4.prototype.method1 = function (canshu) {
    };
    return Lei4;
}(Lei3));
var Lei5 = /** @class */ (function () {
    function Lei5() {
    }
    Lei5.prototype.a = function () {
    };
    Lei5.prototype.aa = function () {
    };
    return Lei5;
}());
var obj = {
    aaa: function () { },
    bbb: 1,
};
// 修饰类
var xingweidechouxiang = /** @class */ (function () {
    function xingweidechouxiang() {
        this.bbb = 1;
        // bbb = '1'
    }
    xingweidechouxiang.prototype.aaa = function () { };
    return xingweidechouxiang;
}());
var jicheng = /** @class */ (function () {
    function jicheng() {
        this.ccc = 1;
        this.bbb = 1;
    }
    jicheng.prototype.aaa = function () {
        // this.ccc = ''
    };
    return jicheng;
}());
// const hanshu: jiekou5= (a:string):void=>{}
/**
 * 泛型
 * 泛型可以修饰函数,数组.类,接口,类型别名
 */
// 泛型函数 标志<T>, T的作用于仅限于函数内部,执行时再确认T的类型
function fanxinghanshu(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var result = fanxinghanshu(3, 'x');
// 类数组对象类型 IArguments, 不是反向解构参数数组
function leishuzu() {
    var argssss = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argssss[_i] = arguments[_i];
    }
    var args = arguments;
    // console.log(args);
}
leishuzu(1, '2', {});
// DOM类型HTMLElement, DOM的children类数组对象类型HTMLCollection NodeList
// const rootDom = document.getElementById('root');
// const children1: HTMLCollection = (rootDom as HTMLElement).children
// const children2: NodeList = (rootDom as HTMLElement).childNodes
// 泛型类
var fanxinglei = /** @class */ (function () {
    function fanxinglei() {
        this.xxx = [];
        this.YYY = [];
    }
    fanxinglei.prototype.aaa = function (a, b) {
        this.xxx.push(a);
        this.YYY.push(b);
        // console.log(this.xxx,this.YYY);
    };
    return fanxinglei;
}());
new fanxinglei().aaa(1, 'a');
var fanxingjiekouobj = {
    // a: 'a',
    a: 1,
    b: function (c) {
        return 'a';
    }
};
var morenfanxingobj = {
    a: 1
};
function tuozhanfanxing(a) {
    return a.vvvv;
}
// 泛型数组
var arr = [{ a: 1, b: 'a' }];
var fanxingleixingbieming = { a: 1, b: [2, 3, 1] };
var duixiang = {
    a: 1,
    b: 'a'
};
// typeof
var typeofDemo = 1;
var typeoftest = 1;
var suoyin = 1;
var binliqidemo1 = 'a';
var binliqidemo2 = {
    a: 1,
    b: 'a',
    c: false
};
var binliqidemo3 = {
    a: 1,
    b: 'a',
    c: false
};
var partialobj = {
    a: 1
};
var kexuanobj = {
    a: 1,
    b: 'a'
};
var zhiduobj = { a: 1, b: 'a' };
var zhaiquobj = { a: 1 };
var tiqu = false;
// ReturnType 函数的返回类型
function fanhuileixing() {
    return 1;
}
var fanhui = 2;
// InstanceType 获取构造函数的实例类型
var shili = /** @class */ (function () {
    function shili() {
        this.a = 1;
        this.b = 'a';
    }
    shili.prototype.c = function () {
    };
    return shili;
}());
var shiliobj = {
    a: 1,
    b: 'c',
    c: function () {
    },
};
/**
 * declare
 * 只有在js库没有对应的@type/库名时才会用到, 不太常用
 */
console.log(1222);
