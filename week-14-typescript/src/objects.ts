type User = {
    id: string,
    username: string
}

// type Users = {
//     [key: string]: User
// }


type Users = Record<string, User> // key value pair


const users: Users = {
    "rid1": {
        id: "is1",
        username: "Gopal"
    },
    "rid2": {
        id: "id2",
        username: "gopal23"
    }
}

//. using map (preferrable)

type Bike = {
    brand: string,
    cc: number
}

const bikes = new Map<string, Bike>()

bikes.set("bike1", { brand: "BMW", cc: 220 })
bikes.set("bike2", { brand: "Hero", cc: 120 })

const bike1 = bikes.get("bike1")
console.log(bike1)

//. exclude

type EventType = 'click' | 'mousemove' | 'scroll'

type ExcludeEvent = Exclude<EventType, 'scroll'> // it excludes the given field i.e. scroll

function handleEvent(exEvent: ExcludeEvent) {
    console.log(`Handling event: ${exEvent}`);
    
}