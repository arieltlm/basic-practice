let entries = new Map([["name", "john"], ["age", 22]]);

console.log(Object.fromEntries(entries));
// { name: 'john', age: 22 }
const urlP = new URLSearchParams('foo=bar&baz=qux')
console.log(urlP); // URLSearchParams { 'foo' => 'bar', 'baz' => 'qux' }
const paramsObj = Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))

console.log(paramsObj) // { foo: 'bar', baz: 'qux' }

// ======================================================
const url = 'http://localhost/es6style.html?foo=bar&baz=qux'
const searchs = '?foo=bar&baz=qux' // location.search
const urlPs = new URLSearchParams(searchs)

console.log(urlPs.get('foo')) // bar

const paramsObjs = Object.fromEntries(urlP)

console.log('paramsObjs',paramsObjs) // { foo: 'bar', baz: 'qux' }


/* `new URLSearchParams()`这个很好用啊，但是兼容性不好 
用url-search-params-polyfill来解决兼容性---未测试
npm install url-search-params-polyfill --save
import 'url-search-params-polyfill';
*/