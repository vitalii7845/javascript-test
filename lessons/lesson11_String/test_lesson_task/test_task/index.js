const text = 'message';

const myMessage = `
The text is ${text.toUpperCase()},
And something else.
`;

console.log(myMessage);
console.log(text[0]); // m
console.log(text[text.length - 1]); // e
console.log(text.charAt(text.length));
console.log(text.charAt(1)); // e

text[2] = 'Q';
console.log(text); // message

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcs/nEfg'
