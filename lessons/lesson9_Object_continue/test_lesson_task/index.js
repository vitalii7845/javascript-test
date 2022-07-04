// const user = {
//   name: 'Tom',
//   key: 17,
// };

// // const concatProps = obj => {
// //   const arr = [];

// //   for (let key in obj) {
// //     arr.push(obj[key]);
// //     // arr = arr.concat(obj[key]);
// //   }
// //   return arr;
// // };

// const concatProps = obj => Object.values(obj);

// console.log(concatProps(user));

// const user = {
//   name: 'Tom',
//   key: 17,
// };

// ______________________________________

// // Object.keys();
// // Object.values();
// // Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const getAdult = userObj => {
//   // {'Tom': 17, 'John Doe': 19, 'Bob': 18,} => [['Tom', 17], ['John Doe', 19], ['Bob, 18]]
//   const userArray = Object.entries(userObj);
//   // [['Tom', 17], ['John Doe', 19], ['Bob, 18]] => [['John Doe', 19], ['Bob, 18]]
//   const filteredUserArray = userArray.filter(user => user[1] >= 18);
//   // [['John Doe', 19], ['Bob, 18]] => ['John Doe', 'Bob]
//   const userName = filteredUserArray.map(user => user[0]);
//   return userName;
// };

// Refactoring cod

const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

const getAdult = userObj => {
  const limitAge = 18;
  const resultGetAdult = Object.entries(userObj)
    .filter(user => user[1] >= limitAge)
    .map(user => user[0]);

  return resultGetAdult;
};

console.log(Object.entries(users));
console.log(getAdult(users));
