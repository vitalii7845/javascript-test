// '1 + 2' => '1 + 2 = 3'

// const calc = expression => {
//   const a = expression.split(' '); // '1' '+' '2'
//   let resultCal;
//   switch (a[1]) {
//     case '+':
//       result = +a[0] + Number(a[2]);
//       break;
//     case '-':
//       result = a[0] - a[2];
//       break;
//   }
//   return `${expression} = ${result}`;
// };

const calc = expression => {
  const [a, operator, b] = expression.split(' '); // '1' '+' '2'
  let resultCal;

  switch (operator) {
    case '+':
      resultCal = Number(a) + +b;
      break;
    case '-':
      resultCal = a - b;
      break;
    case '*':
      resultCal = a * b;
      break;
    case '/':
      resultCal = a / b;
  }
  return `${expression} = ${resultCal}`;
};
// test data
console.group(calc('7 + 9'));
console.group(calc('-3 + -7'));

console.group(calc('15 - 10'));
console.group(calc('-15 - 20'));
console.group(calc('15 - -10'));

console.group(calc('5 * 20'));
console.group(calc('100 * 1'));

console.group(calc('35 / 5'));
console.group(calc('3 / 5'));
