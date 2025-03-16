// function delayedCall(anotherFn: () => void) {
//   setTimeout(anotherFn, 1000);
// }

// function log() {
//   console.log("Hey There");
// }

// delayedCall(log);

// function getUser(user: { name: string; age: number }) {
//   console.log("Hello I'm:", user.name);
//   console.log(`I'm ${user.age} years old`);
// }

// let userDetails = {
//   name: "Gopal",
//   age: 23,
// };

// getUser(userDetails);

//?
// let user: {
//   name: string;
//   age: number;
// } = {
//   name: "Gopal",
//   age: 23,
// };

// function xyz(user: { name: string; age: number }) {}

//. Interface

// interface User {
//   name: string;
//   age: number;
// }

// type UserType = {
//   name: string;
//   age: number;
// };

// function greet(user: User) {
//   console.log(user.name);
//   console.log(user.age);
// }

// greet({ name: "Gopal", age: 23 });

// //. Union

// type sumInput = number | string;

// function sum(a: sumInput, b: sumInput): sumInput {
//   return a;
// }

//. Intersection

// interface Manager {
//   name: string;
//   age: number;
// }

// interface Employee {
//   name: string;
//   department: string;
// }

// type TeamLead = Manager & Employee;

// let t: TeamLead = {
//   name: "Gopal",
//   age: 23,
//   department: "ETC",
// };


//*14.2

function sums(a: number, b: number): number {
  return a + b;
}

function isEven(num: number): boolean {
  return num % 2 == 0 ? true : false;
}

//? interface
// interface Address {
//   city: string;
//   country: string;
//   zipCode: number;
//   houseNo?: string;
// }

// interface User {
//   name: string;
//   age: number;
//   address?: Address;
// }

// interface Office {
//   address?: Address;
// }

// let user: User = {
//   name: "Gopal",
//   age: 12,
//   address: {
//     city: "Raipur",
//     country: "india",
//     zipCode: 493555,
//   },
// };

// let user2: User = {
//   name: "Gopal",
//   age: 23,
// };

// function isLegal(user: User): boolean {
//   return user.age >= 18 ? true : false;
// }

// const ans = isLegal(user);
// ans ? console.log("I'm Legal") : console.log("I'm not legal");

interface People {
  name: string,
  age: number,
  greet: () => string,
  greet2?(): string
}

let perosn1: People = {
  name: "Kirti",
  age: 22,
  greet: () => {
    return "heyy"
  }
}