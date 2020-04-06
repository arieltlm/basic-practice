# 1.快速生成ES6代码运行环境
实践了快速生成ES6代码运行环境，并进行了扩展学习，详细请见`./README-ES6.md`

# 2.running-import

测试了import为编辑阶段执行

* import命令时编译阶段执行的，在代码运行之前，因此被倒入的模块会先运行，而导入模块的文件会后执行；
* CommonJS中require()可以在运行代码时，根据需要加载依赖项


* ES6是值引用，编译时加载，后续值改变，它也会随之改变
* CommonJS 是值拷贝，运行时加载，运行即引入时的值，后续的改变并不会影响其改变

详细可见`../test2/README.md`

# 3.parcel-bundler

> 极速零配置Web应用打包工具

[parcel官网](https://parceljs.org/)

[parcel文档](https://parceljs.org/getting_started.html)

很简单的一个打包工具：

```
// package.json
"scripts": {
    "start": "parcel ./src/index.html"
},
```
基本不用添加什么配置，很多都是自动识别项目下的配置文件，比如`babel`的.babelrc,`postcss`的.postcssrc等;vue，react这些就直接进行打包，不需要配置。还可以使用动态引用（import）新语法，利于代码拆分。甚至可以不用先安装一些包，parcel会直接去安装

如果要增加配置，就在`package.json`中直接添加；

可以使用热重载；


[打包神器之Parcel使用指南](https://www.jianshu.com/p/42f98e04312f)这篇文章不错，还有具体的demo


# 4.es2020

## 1).class-private-var

测试了类中的私有变量--前缀加`#`，需要`@babel/plugin-proposal-class-properties`插件

## 2).promise-allSettled

由于单一 Promise 进入 rejected 状态便会立即让 Promise.all() 的结果进入 rejected 状态，以至于通过 Promise.all() 进入 rejected 状态时，其中的源 Promise 仍然可能处于 pending 状态，以至于无法获得所有 Promise 完成的时机。

 Promise.allSettled() API 被提出，其中 settled 状态的定义是非 pending，即 fulfilled 或者 rejected 中的任一状态。

## 3).nullish-coalescing-operator (??)

```js
const a = {
    b:'',
    c: 0
}

console.log(a.b ?? 10) // ''
console.log(a.c ?? 10) // 0
```
## 4).BigInt

基本数据类型中增加一种BigInt，在其后需要增加`n`

数据类型：String、Number、Null、Boolean、Symbol、Undefined、BigInt、Object
基本数据类型：String、Number、Null、Boolean、Symbol、Undefined、BigInt
引用数据类型：Object（Array、Function、Object）

## 5).dynamic-import

可以使用 `async/await` 来动态`import`




# 5.es2019

[es2019/es10](https://alligator.io/js/es2019/)

## 1).Array.flat()

多维数组进行压平；

`arr.flat(Infinity)` 无限压平

## 2).Array.flatMap()

将`map`和`flat`方法合二为一,提高效率

但是这个不能传递压平层级参数，只能一级压平

## 3).string-trimStart

`String.trimStart()`和`String.trimEnd()` 是`String.trim()`的细节版

## 4).try-catch

新语法将`catch`前面的参数省略，直接在`catch`中处理错误

```js
try  {
    // some code
    throw new Error(1)
  }
  catch {
    // error handling code
    console.log('出错')
  }
```

## 5).object-fromEntries

它创建一个对象或将键值对转换为对象。它只接受iterables;`Object.fromEntries(someIterable)`。


[Object.fromEntries()](https://www.cnblogs.com/sunshineForFuture/p/10432223.html):

* Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。

* 该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

* 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。


```js
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')) // { foo: 'bar', baz: 'qux' }
```

扩展`URLSearchParams`：
[URLSearchParams 兼容性引发IOS 10 白屏问题](https://blog.csdn.net/u010644262/article/details/104015018)
兼容性使用[url-search-params-polyfill](https://www.npmjs.com/package/url-search-params-polyfill)


## 6).symbol

新增加一个基本数据类型Symbol，独一无二；

[面试官：JavaScript 原始数据类型 Symbol 有什么用？](https://juejin.im/post/5e89ba2ee51d4547052cf2fa)

* 拥有Symbol.iterator函数的对象被称为可迭代对象，可以在对象上使用for/of 循环。
* 可以作为私有属性
* JSON.stringify()会忽略symbol属性名和属性值 

> 【tlm】时刻：这个实践还没用到过，理解还不透彻，后面再研究

# 6.basic-es6

之前es6的基本练习
