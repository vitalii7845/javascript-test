const arr = ['a', 'b'];

// array
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// object

// const user = {
//   name: 'Tom',
//   key: 17,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

const user = {
  name: 'Tom',
  key: 17,
};

const concatProps = obj => {
  const arr = [];

  for (let key in obj) {
    arr.push(obj[key]);
    // arr = arr.concat(obj[key]);
  }

  return arr;
};

console.log(concatProps(user));
