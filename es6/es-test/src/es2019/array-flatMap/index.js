let arr = [1, 2, 3, 4, 5];

console.log(arr.map(x => [x, x * 2]));
// [Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]

console.log(arr.flatMap(v => [v, v * 2]));
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
