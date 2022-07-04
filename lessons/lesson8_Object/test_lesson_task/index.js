// const transformToObject = arr => {
//   const obj = {};

//   arr.forEach(element => {
//     obj[element] = element;
//   });

//   return obj;
// };

// const arr = [1, 'text'];

// const result = transformToObject(arr);
// console.log(result);

// const a = {};
// const b = {};

// console.log(a === b); // false

// const a = {};
// const b = a;

// console.log(a === b); // true

// const name = 'Tom';

// const user = {
//   name, // name: name
// };

// const prop = 'my';

// const obj = {
//   name: 'Tom',
//   age: 17,
//   interes: 'football',
//   'my name': 'Bob',
//   [prop + 'name']: 'value',
// };

// console.log(obj.age); // 17
// obj.age = 18;
// console.log(obj.age); // 18
// console.log(obj['my name']); // Bob
// console.log(obj[prop + 'name']; //value

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// const object2 = {
//   a: 'somestring',
//   b: 42,
// };
// for (const [key, value] of Object.entries(object2)) {
//   console.log(`${key}: ${value}`);
