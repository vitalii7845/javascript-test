// copyObj

// const users = {
//   Tom: 17,
//   Bob: 100,
// };

// const players = {
//   'John Doe': 19,
//   Bob: 18,
// };

// const res = Object.assign(users, players); //
// console.log(res);
// console.log(res === users); // true
// console.log(res === players); // false

// // copy_var_1
// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(users));
// users.Bob = 5;
// console.log(users);

// copy_var_2

// const players = {
//   'John Doe': 19,
//   Bob: 18,
// };

// const users = { ...players };

// console.log(players === users); // false

// console.log(players);
// console.log(users);

// destructuruzaciya_______

// const players = {
//   'John Doe': 19,
//   name: 'Tom',
// };

// const { name } = players;
// console.log(name);
// const { name: myName } = players;
// console.log(name);
// const { name: myName = 'default' } = players;
// console.log(name);
// const { surname = 'default' } = players;
// console.log(surname);

const users = {
  'John Doe': 19,
  name: 'Tom',
};

const { name = 'default', ...resProps } = users;
console.log(resProps);

const players = {
  game: 'football',
  ...resProps,
};

console.log(players);
