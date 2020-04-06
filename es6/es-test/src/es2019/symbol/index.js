let mySymbol = `My Symbol`;

let symObj = Symbol(mySymbol);

console.log(symObj) // Symbol(mySymbol);

console.log(String(symObj) === `Symbol(${mySymbol})`); // true

console.log(symObj.description); // "My Symbol"

/* ================================================ */
// 面试官：JavaScript 原始数据类型 Symbol 有什么用？(https://juejin.im/post/5e89ba2ee51d4547052cf2fa)
console.log(  /* ==============Symbol.iterator迭代==================== */);
// 拥有Symbol.iterator函数的对象被称为可迭代对象，就是说你可以在对象上使用for/of 循环。
const fibonacci = {
    [Symbol.iterator]: function*() {
      let a = 1;
      let b = 1;
      let temp;
  
      yield b;
  
      while (true) {
        temp = a;
        a = a + b;
        b = temp;
        yield b;
      }
    }
  };
  
  // Prints every Fibonacci number less than 100
  for (const x of fibonacci) {
    if (x >= 100) {
      break;
    }
    console.log(x);
  }
  
  /* ================================== */
  console.log(  /* ==============私有属性================= */);
  /* 由于任何两个symbol都是不相等的，在 JavaScript 里可以很方便地用来模拟私有属性。
  symbol不会出现在 Object.keys()的结果中，因此除非你明确地export 一个symbol，
  或者用 Object.getOwnPropertySymbols() 函数获取，否则其他代码无法访问这个属性。 */

  function getObj() {
    const symbol = Symbol('test');
    const obj = {};
    obj[symbol] = 'test';
    return obj;
  }
  
  const obj = getObj();
  
  console.log(Object.keys(obj)); // []
  
  // 除非有这个 symbol 的引用，否则无法访问该属性
  console.log(obj[Symbol('test')]); // undefined
  
  // 用 getOwnPropertySymbols() 依然可以拿到 symbol 的引用
  const [symbol] = Object.getOwnPropertySymbols(obj);
  console.log(obj[symbol]); // 'test'

  /* ================================== */
  console.log(  /* ==============JSON.stringify()会忽略symbol属性名和属性值================= */);
  /* 还有一个原因是symbol不会出现在JSON.stringify()的结果里，
  确切地说是JSON.stringify()会忽略symbol属性名和属性值 */
  
  const symbols = Symbol('test');
  const objs = { [symbols]: 'test', test: symbols };
  
  console.log(JSON.stringify(objs)); // "{}"
  