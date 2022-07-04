// getMaxAbsoluteNumber

// const getMaxAbsoluteNumber = arr => {
//   let max = -Infinity;

//   arr.forEach(element => {
//     if (Math.abs(element) > max) {
//       max = Math.abs(element);
//     }
//   });
//   return max;
// };

// 1. get absolute value
// 2. find max

const getMaxAbsoluteNumber = arr => {
  const absoluteValues = arr.map(num => Math.abs(num));
  return Math.max(...absoluteValues);
};
