let mySymbol = `My Symbol`;

let symObj = Symbol(mySymbol);

console.log(symObj) // Symbol(mySymbol);

console.log(String(symObj) === `Symbol(${mySymbol})`); // true

console.log(symObj.description); // "My Symbol"