// arr [1, 2, 5, [8, 9, 1], 5] => [1, 2, 3, 4, 5, 6]

// const flatArray = arr => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

//   return flatArray;
// };

// const flatArray = arr =>
//   arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

// const testArray = [1, 2, 5, [8, 9, 1], 5];

const flatArray = arr => arr.flat();

const testArray = [1, 2, 5, [8, 9, 1], 5];
console.log(flatArray(testArray));

// // [1, 2,3,4] => 10;

// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);
