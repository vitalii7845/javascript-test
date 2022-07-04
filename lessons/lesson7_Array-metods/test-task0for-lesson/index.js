// arr [1, 2, 5, [8, 9, 1], 5] => [1, 2, 3, 4, 5, 6]

// const flatArray = arr => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

//   return flatArray;
// };

// const flatArray = arr =>
//   arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

// const testArray = [1, 2, 5, [8, 9, 1], 5];

// ['Ann', 'Tom', 'Robert', 'Jon', 'Victor', 'Olga']; ['Jon', 'Victor'] => god job Ann....

// const getMessageForPassedStudents = (allStudents, failedStudents) => {
//   const passedStudent = allStudents.filter(name => failedStudents.indexOf(name) === -1);

//   return passedStudent;
// };

// const getMessageForPassedStudents = (allStudents, failedStudents) => {
//   const passedStudents = allStudents.filter(name => !failedStudents.includes(name));

//   const messages = passedStudents.map(name => `God job, ${name}`);

//   return messages;
// };

const getMessageForPassedStudents = (allStudents, failedStudents) =>
  allStudents.filter(name => !failedStudents.includes(name)).map(name => `God job, ${name}`);

const allStudents = ['Ann', 'Tom', 'Robert', 'Jon', 'Victor', 'Olga'];
const failedStudents = ['Jon', 'Victor'];

console.log(getMessageForPassedStudents(allStudents, failedStudents));
