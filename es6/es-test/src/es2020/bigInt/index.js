const max = Number.MAX_SAFE_INTEGER;

console.log(max); // 9007199254740991

console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992
console.log(max + 3); // 9007199254740994
console.log(Math.pow(2, 53) == Math.pow(2, 53) + 1); // true


const bigNum = 100000000000000000000000000000n;

console.log(bigNum * 2n); // 200000000000000000000000000000n

/* ========================================== */
/* 没有增加@babel/plugin-syntax-bigint这个插件但是运行成功了？ */