//静态字符串使用单引号，动态使用反引号
const ad = 'foo';
const bd= `qwe${ad}`;
console.log(bd);//qwefoo

//数组解构赋值
const arr = [1,2,3];

const [first,second] = arr;

console.log(first);//1
console.log(second);//2

//对象解构赋值，必须变量名和属性名一致，没有次序
const obj = {
    firstName:"zhang",
    secondName:'san'
}

getNameVal(obj)//zhangsan

gets(obj)//zhangsan

function getNameVal({firstName,secondName}){
    console.log(firstName + secondName);
}
function gets(obj){
    const {secondName,firstName} = obj;
    console.log(firstName + secondName);
}

//函数返回多个值，优先考虑对象解构
function sets(input){
    let a = input == 1 ? 'a1':'';
    let b = input == 1 ? 'b1':'';
    let c = input == 1 ? 'c1':'';
    return {a,b,c};
}

const {a,b,c} = sets(1);
console.log(a + b + c);//a1b1c1

//创建对象时属性名使用属性表达式定义。方法使用简写
const obgj = {
    m:1,
    n:2,
    [sets(1)['a']]:true,
    add(j,k) {
        return obgj.m +j +k;
    }
}
console.log(obgj);//{m:1,n:2,a1:true,add:f}
console.log(obgj.add(3,1));//5

//扩展运算符复制数组，不影响原数组
const arr1 = [...arr];
console.log(arr1);//[1,2,3]
arr1.push(9);
console.log(arr);//[1,2,3]
console.log(arr1);//[1,2,3,9]

// 使用 Array.from 方法，将类似数组的对象转为数组。
// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);
// console.log(Array.isArray(nodes));//true


//配置项以对象形式放在最后一位，false不能直接作为参数
function render(a,b,{p = false } = {}){
    console.log(a);//1
    console.log(b);//2
    console.log(p);//{age:1,height:23}
}
render(1,2,{p:{age:1,height:23}});//{age:1,height:23}

//使用rest运算符(...)代替arguments,提供一个真正的数组
function add(...arg){
    return arg.reduce((val,k) => {
        return  val = val + k;
    })
}
console.log(add(1,2,3,4));//10

//对象到Map需要进行转换，Map只是对于值到值好用，需要set给里面加，然后再遍历
let o = sets(1);

function objToMap(obj){
    let map = new Map();
    for (let k of Object.keys(obj)){
        map.set(k,obj[k])
    }
    return map
}
let map = new Map(objToMap(o)) ;

for(let value of map.values()){
    console.log(value);//a1 /n a2 /n a3
}