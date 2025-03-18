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
    name: string; // primitive
    age: number;
    isLegal(): boolean;
}

//? class that implements interface
class Manager implements People { //! access all properties of People
    name: string;
    age: number;
    password: string; //! interface se extreaa chize aa sakti hai kam nahi

    constructor(name: string, age: number, password: string) {
        this.name = name,
            this.age = age,
            this.password = password;
    }

    isLegal(): boolean {
        return this.age > 18 ? true : false;
    }
}

let user = new Manager("Gopal", 12, "abc123");
console.log(user.isLegal());

//# extends
class Employee extends Manager { //! access all properties of manager
    constructor(name: string, age: number, password: string) {
        super(name, age, password);
    }

    logMe() {
        return this.name;
    }
}

interface Address {
    city: string,
    pincode: number
}

interface Aadmi {
    name: string,
    age: number,
    addresses: Address[]
}

let user2: Aadmi = {
    name: "Gopal", 
    age : 23,
    addresses: []
    
}
