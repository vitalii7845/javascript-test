parseInt('17.17text');
Number.parseInt('17.17text');
Number.parseInt('seventeen');

parseFloat('17.17text'v);
Number.parseFloat('17.17text');
Number.parseFloat('seventeen');


// const parseArray = arr => {
//   const result = arr
//     .map(el => Number.parseFloat(el));

//   return result;
// };


const parseArray = arr => arr
    .map(el => Number.parseFloat(el));

const elementList = [4, 5, 6, '   8.7jg', null, NaN, undefined];

console.log(parseArray(elementList));