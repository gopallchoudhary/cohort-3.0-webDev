// interface User {
//     name: string,
//     age: number,
//     id: string,
//     email: string,
//     password: string
// }

// //. Pick 
// type updatedProps = Pick<User, 'name' | 'age' | 'email'>

// const update: updatedProps = {
//     name: "Gopal",
//     age: 23,
//     email: "gopalchoudhary521@gmail.com"
//     //! it is necessary to give all required fields (all 3)
// }

// function updatedUser(updatedProps: updatedProps) {
//     console.log(`${updatedProps.name}`)
// }


// //. Partial 
// type partialUpdate = Partial<updatedProps>

// const partial: partialUpdate = {
//     email: "choudharygopal723@gmail.com"
//     //! all fields are optional
// }

// function updateProps(updatePropsOptional: partialUpdate) {
//     console.log(`${updatePropsOptional.name}`);
    
// }


// /*
// 1. Pick => lets you pick selected things from the type or interface
// 2. Partial => makes all the fields are optional (like name?:, age?:)
// */