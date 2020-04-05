# CommonJS和ES Module的区别

* ES6是值引用，编译时加载，后续值改变，它也会随之改变
* CommonJS 是值拷贝，运行时加载，运行即引入时的值，后续的改变并不会影响其改变

***

**CommonJS**:

```js
// a.js
const mod =require('./b')

setTimeout(()=>{
    console.log(mod)
},1000)

// b.js
let mod ='first value'
setTimeout(()=>{
    mod = 'second value'
},500)

module.exports = mod

===================
node a.js

first value
```

***

**ESM**:

```js
// a.mjs
import { mod } from ./b.mjs'
setTimeout(()=>{
    console.log(mod)
},1000)

// b.mjs
export let mod = 'first value'
setTimeout(()=>{
    mod = 'second value'
},500)


=============================
(将文件后缀存成.mjs，可以没有es6的运行环境使用node --experimental-modules就可以运行)
node --experimental-modules a.mjs
(node:9620) ExperimentalWarning: The ESM module loader is experimental.
second value

```

*** 
**ES6**:

```js
// a-es6.mjs
console.log('running a-es6.js')
import {sum} from './b-es6.mjs'
console.log(sum(1,2))

// b-es6.js
console.log('running b-es6.js')
export const sum = (a,b) => a + b

=====================
node --experimental-modules a-es6.mjs

running b-es6.js
running a-es6.js
3

> import命令时编译阶段执行的，在代码运行之前，因此被倒入的模块会先运行，而导入模块的文件会后执行；
> CommonJS中require()可以在运行代码时，根据需要加载依赖项