//? unions and intersection is only possible in types
//? | => union koi ek ka pura hona hi chahiye
//? & => intersection: pura ka pura hona chahiye


type Laptop = {
    name: string
    webCam: boolean
    ports: number
}

type Mobile = {
    name: string
    noOfCamera: number
    display: string
}




// let pr: Product = {
//     name: "REALME",
//     webCam: false,
//     ports: 3,
//     display: "LCD",
//     noOfCamera: 3
// }

type One = {
    name: string,
    id: number
}

type Two = {
    age: number,
    department: string,
}

type Resutl = One | Two & { accountType: string, cvv: number }


let user3: Resutl = {
    age: 23,
    department: "electronics",
    accountType: "savings",
    cvv: 232
}

type A = {
    name: string
}

type B = {
    age: number
}

interface X extends A, B {

}

let x: X = {
    name: "Gopal", 
    age: 23
}