// todo   Destruction

// ? task-1  / const numbers = [1, 2, 3, 4, 5]; Arrayın elementlərini yazdırın   console.log(first);   // Output: 1  console.log(second);  // Output: 2  console.log(fourth);  // Output: 4

// const numbers = [1, 2, 3, 4, 5];
// [n, a, h, i, d] = numbers;
// console.log(n);
// console.log(a);
// console.log(h);
// console.log(i);
// console.log(d);

// ! end

// ? task-2   / Objectin elementlərini yazdırın
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const { firstName, lastName, age } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// ! end

// ? task-3  /  printPerson Funksiyasını yazın. printPerson(person); // Output: Alice Johnson is 25 years old.

// const person = {
//   firstName: "Alice",
//   lastName: "Johnson",
//   age: 25,
// };

// function printPerson({ firstName, lastName, age }) {
//   console.log(`${firstName} ${lastName} is ${age} years old.`);
// }
// printPerson(person);
// ! end

// ? task-4   /  console.log(username);   // Output: john_doe   console.log(firstName);  // Output: John console.log(city);       // Output: New York

// const user = {
//   id: 1,
//   username: "john_doe",
//   email: "john@example.com",
//   details: {
//     firstName: "John",
//     lastName: "Doe",
//     address: {
//       city: "New York",
//       zipCode: "10001",
//     },
//   },
// };

// const {
//   username,
//   details: {
//     firstName,
//     address: { city },
//   },
// } = user;

// console.log(username);
// console.log(firstName);
// console.log(city);

// ! end

// ? task-5  /   rest parametrdən istifadə edərək ilk ədədi və qalan ədədləri ekrana yazdırın  console.log(first);         // Output: 1   console.log(restOfNumbers); // Output: [2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];
// [first, ...restOfNumbers] = numbers;

// console.log(first);
// console.log([...restOfNumbers]);

// ! end

// ? task-6  / birlesdir
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const allArr = [...arr1, ...arr2];
// console.log(allArr);

// todo  Data Transformation tasks

// ? task-1  /  const numbers = [1, 2, 3, 4, 5];  array-i iki qatı olan array yaradın — c // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];

// const eventNumbers = numbers.map(function (a) {
//   return a * 2;
// });

// console.log(eventNumbers);
// ! end
// ? task-2 /  array-in cüt ədədərdən ibarət arrayı yaradın —  // [2, 4]

// const numbers = [1, 2, 3, 4, 5];

// const eventNumbers = numbers.filter((a) => a % 2 === 0).map((a) => a);

// console.log(eventNumbers);
// ! end

// ? task-3  / arrayın-dən yaşı 30-da yuxarı olanların adlarından ibarət array yaradın — console.log(namesOver30); // ['Bob', 'David']

// const users = [
//   { id: 1, name: "Alice", age: 28 },
//   { id: 2, name: "Bob", age: 32 },
//   { id: 3, name: "Charlie", age: 25 },
//   { id: 4, name: "David", age: 40 },
// ];

// const namesOver30 = users
//   .filter(function (a) {
//     return a.age > 30;
//   })
//   .map(function (a) {
//     return a.name;
//   });

// console.log(namesOver30);

// ! end

// ? task-4  /  mergedSettings  iki obyektin dəyərlərini birəşdirin bir obyekt yaradın

// const defaultSettings = { theme: "light", fontSize: 16 };
// const userSettings = { fontSize: 18, showSidebar: true };

// const mergedSettings = { ...defaultSettings, ...userSettings };

// console.log(mergedSettings);

// ! fon-size 1 ci ni de nece daxil etmeli?

// ? task-5  /  arrayınin cüt ədədlərinin iki qatını cəmini tap —console.log(result); // 24 (2*2 + 4*2 + 6*2)

// let result = 0;
// const numbers = [1, 2, 3, 4, 5, 6];
// const newArr = numbers.filter((a) => a % 2 === 0).map((a) => (result += a * 2));
// console.log(result);

// ! end

// ? task-6  /  obyektinin   console.log(name); // 'Alice'   console.log(city); // 'New York'  console.log(zip); // '10001'  dəyərlərinin ayrı ayrı dəyişən kimi yaz

// const person = {
//   name: "Alice",
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = person;

// console.log(name);
// console.log(city);
// console.log(zip);

// ! end
