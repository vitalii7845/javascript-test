// task lesson1

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   numbers.forEach(function chekIfSpecialNumbers(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   numbers.forEach(function (num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };

// use metod forEach
// const getSpecialNumbers = numbers => {
//   const specialNumbers = [];

//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });

//   return specialNumbers;
// };

// use metod filter

// const getSpecialNumbers = numbers => {

//   const result = numbers.filter(num => { if (num % 3 === 0) { return true;}
//     return false;
//   });

//   return result;
// };

// const getSpecialNumbers = numbers => {
//   const result = numbers.filter(num => {
//     return num % 3 === 0 ? true : false;
//   });

//   return result;
// };

// const getSpecialNumbers = numbers => {
//   const result = numbers.filter(num => num % 3 === 0);

//   return result;
// };

const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);
const arr = [5, 6, 9, 20, 21, 27, 5, 7, 5, 9, 15, 30, 5];
console.log(getSpecialNumbers(arr));
