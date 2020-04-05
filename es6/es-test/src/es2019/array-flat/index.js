let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, Array(4)];

console.log(arr.flat().flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)];

console.log(arr.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Or, if you're not sure about the depth of the array:
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]