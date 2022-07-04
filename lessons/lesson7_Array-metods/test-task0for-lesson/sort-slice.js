// unsorted arrey => sorted arrey

// const sortArrey = numbers => {
//   const sortArrey = numbers.sort();

//   return sortArrey;
// };

// const sortArrey = numbers => {
//   function compare(a, b) {
//     if (a < b) {
//       return 1;
//     }
//     return -1;
//   }
//   numbers.sort(compare);

//   return numbers;
// };

// const sortArrey = numbers => {
//   function compare(a, b) {
//     return a > b ? 1 : -1;
//   }
//   numbers.sort(compare);

//   return numbers;
// };

const sortArrey = numbers => numbers.slice().sort((a, b) => a - b);

const arr = [5, 9, 1, 8, 7, 3, 5, 1, 2, 95, 54];
console.log(sortArrey(arr));
console.log(arr);
