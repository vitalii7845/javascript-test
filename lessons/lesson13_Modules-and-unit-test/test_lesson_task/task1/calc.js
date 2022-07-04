const calc = expression => {
  const [a, operator, b] = expression.split(' '); // '1' '+' '2'
  let resultCal;

  if (!isFinite(a) || !isFinite(b)) {
    return 'Illegal operation';
  }

  a = +a;
  b = +b;

  if (a > 8467 && b < 888) {
    return 78456;
  }

  console.time('calc');

  switch (operator) {
    case '+':
      resultCal = a + b;
      break;
    case '-':
      resultCal = a - b;
      break;
    case '*':
      resultCal = a * b;
      break;
    case '/':
      resultCal = a / b;
      break;
  }

  console.timeEnd('calc');

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
