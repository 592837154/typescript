/**
 * 数据类型
 */
// 元组 
const yuanzuobj = {
    a: 1
}
type IYuanzu = typeof yuanzuobj;
const yuanzu: [number, string, IYuanzu] = [1, 'a', { a: 1 }];
// 枚举 不是类型,是类型+值, 可以直接访问, 默认value是数组的index
enum Meiju1 {
    a = '222',
    b = 2
}
enum Meiju2 {
    a,
    b
}
const enum Meiju3 {
    a, b
}
// 没返回值 void
// 包装对象
const baozhuang1: boolean = false;
const baozhuang2: boolean = Boolean('1');
// const baozhuang3: boolean = new Boolean('1');
// 联合类型 类型或者值
const lianheobj = { a: 1 };
const lianhe1: string | number | typeof lianheobj | '11' = { a: 1 };
const lianhe2: string | number | typeof lianheobj | '11' = 1;
const lianhe3: string | number | typeof lianheobj | '11' = '11';
// 类型断言 自信告诉编辑器,它就是这个类型,其实number的length会报错
const leixingduanyan: number = 1;
// (leixingduanyan as any).length = 1
/**
 * 函数
 * 参数,可选参数, 返回值,默认参数
 */
// 参数,可选参数, 返回值,默认参数
function canshufanhuizhi(canshu: number, kexuancanshu?: string, morencanshu: boolean = true): void {
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
class Lei1 {
    public a: number = 1
    private aa: number = 11
    protected aaa: number = 111
    readonly b: number = 12
    changeB() {
        // this.b  = 2;
    }
}
class Lei2 extends Lei1 {
    b: number = this.aaa
}
const lei1obj = new Lei1();
const lei2obj = new Lei2();
lei2obj.a = 2
// lei2obj.aa
// lei2obj.aaa
// 抽象类 不能new,里面的抽象方法必须被子类实现
abstract class Lei3 {
    a: number = 1
    abstract method1(canshu: number): void;
}
// new Lei3();
class Lei4 extends Lei3 {
    aa: number = this.a
    method1(canshu: number): void {

    }
}
/**
 * 接口
 * 接口可以修饰对象,函数,类
 */
// 实现多个接口, 必须具备接口的某写方法属性
interface jiekou1 {
    a(): void;
}
interface jiekou2 {
    aa(): void;
}
class Lei5 implements jiekou1, jiekou2 {
    a(): void {

    }
    aa(): void {

    }
}
// 修饰对象
interface jiekou3 {
    aaa(): void;
    bbb: number;
}
const obj: jiekou3 = {
    aaa(): void { },
    bbb: 1,
    // ccc: 2
}
// 修饰类
class xingweidechouxiang implements jiekou3 {
    aaa(): void { }
    bbb = 1
    // bbb = '1'
}
// 任意属性 继承 只读
interface jiekou4 extends jiekou3 {
    [key: string]: any
    readonly ccc: number
}
class jicheng implements jiekou4 {
    ccc = 1
    aaa(): void {
        // this.ccc = ''
    }
    bbb = 1
}
// 修饰一个函数
interface jiekou5 {
    (a: number): void
}
// const hanshu: jiekou5= (a:string):void=>{}
/**
 * 泛型
 * 泛型可以修饰函数,数组.类,接口,类型别名
 */
// 泛型函数 标志<T>, T的作用于仅限于函数内部,执行时再确认T的类型
function fanxinghanshu<T>(length: number, value: T): T[] | Array<T> {
    let result: any = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
let result = fanxinghanshu(3, 'x')
// 类数组对象类型 IArguments, 不是反向解构参数数组
function leishuzu(...argssss: any) {
    const args: IArguments = arguments;
    // console.log(args);
}
leishuzu(1, '2', {})
// DOM类型HTMLElement, DOM的children类数组对象类型HTMLCollection NodeList
// const rootDom = document.getElementById('root');
// const children1: HTMLCollection = (rootDom as HTMLElement).children
// const children2: NodeList = (rootDom as HTMLElement).childNodes
// 泛型类
class fanxinglei<T, U>{
    xxx: Array<T> = [];
    YYY: Array<U> = [];
    aaa(a: T, b: U) {
        this.xxx.push(a)
        this.YYY.push(b)
        // console.log(this.xxx,this.YYY);
    }
}
new fanxinglei().aaa(1, 'a');
// 泛型接口 
interface fanxingjiekou<T, U> {
    a: T;
    b(c: T): U
}
const fanxingjiekouobj: fanxingjiekou<number, string> = {
    // a: 'a',
    a: 1,
    b(c: number): string {
        return 'a';
    }
}
// 默认泛型类型
interface morenfanxing<T = number> {
    a: T;
}
const morenfanxingobj: morenfanxing = {
    a: 1
}
// 拓展泛型 泛型继承接口实现多个属性
interface tuozhanfanxingjiekou {
    vvvv: string
}
function tuozhanfanxing<T extends tuozhanfanxingjiekou>(a: T) {
    return a.vvvv;
}
// 泛型数组
const arr: Array<{ a: number, b: string }> = [{ a: 1, b: 'a' }]
// 泛型类型别名
type TFanxingleixingbieming<T> = { a: T, b: Array<T> }
const fanxingleixingbieming: TFanxingleixingbieming<number> = { a: 1, b: [2, 3, 1] }
/**
 * 关键字
 *  交叉类型&, 获取变量的类型typeof, 索引访问[], 接口遍历器keyof
 *  Partial,Ruquired,Readonly, Pick,Exclude,Extract,ReturnType,InstanceType
 */
// &
interface jiekou6 {
    a: number
}
interface jiekou7 {
    b: string
}
type keyand = jiekou6 & jiekou7
const duixiang: keyand = {
    a: 1,
    b: 'a'
}
// typeof
const typeofDemo = 1;
const typeoftest: typeof typeofDemo = 1;
// 索引访问 []
interface suoyinfangwenjiekou {
    a: {
        b: {
            c: number
        }
    }
}
const suoyin: suoyinfangwenjiekou['a']['b']['c'] = 1;
// keyof 等价于'a'|'b'|'c', 可以映射,也可以使用泛型映射
interface bianliqi {
    a: number;
    b: string;
    c: boolean;
}
type IBianliqi1 = keyof bianliqi;
const binliqidemo1: IBianliqi1 = 'a';
type IBianliqi2 = {
    [key in keyof bianliqi]: bianliqi[key]
};
const binliqidemo2: IBianliqi2 = {
    a: 1,
    b: 'a',
    c: false
}
type IBianliqi3<T> = {
    [key in keyof T]: T[key]
};
const binliqidemo3: IBianliqi3<bianliqi> = {
    a: 1,
    b: 'a',
    c: false
}
// Partial 将接口的属性变为可选
interface partialjiekou {
    a: number;
    b: string;
}
type partialleixing = Partial<partialjiekou>;
const partialobj: partialleixing = {
    a: 1
}
// Ruquired 将接口的可选属性变为必填
interface kexuanjiekou {
    a?: number;
    b?: string;
}
type IKexuan = Required<kexuanjiekou>;
const kexuanobj: IKexuan = {
    a: 1,
    b: 'a'
}
// Readonly 将接口的属性变为只读
interface zhidujiekou {
    a: number;
    b: string;
}
type IZhidujiekou = Readonly<zhidujiekou>;
const zhiduobj: IZhidujiekou = { a: 1, b: 'a' };
// zhiduobj.a = 2;
// Pick 摘取接口某一项返回
interface zhaiqujiekou {
    a: number;
    b: string;
}
type IZhaiqu = Pick<zhaiqujiekou, 'a'>;
const zhaiquobj: IZhaiqu = { a: 1 };
// Exclude 联合类型中排除一项
type Ipaichu = Exclude<string | number | boolean, number>;
// const paichu:Ipaichu = 1;
// Extract 从联合类型中提取一项
type ITiqu = Extract<number | string | boolean, boolean>;
const tiqu: ITiqu = false;
// ReturnType 函数的返回类型
function fanhuileixing() {
    return 1;
}
type IFanhui = ReturnType<typeof fanhuileixing>;
const fanhui: IFanhui = 2;
// InstanceType 获取构造函数的实例类型
class shili {
    a: number = 1
    b: string = 'a'
    c(): void {

    }
}
type IShilileixing = InstanceType<typeof shili>;
const shiliobj: IShilileixing = {
    a: 1,
    b: 'c',
    c() {

    },
    // d:3
}
/**
 * declare
 * 只有在js库没有对应的@type/库名时才会用到, 不太常用
 */
console.log(3);















