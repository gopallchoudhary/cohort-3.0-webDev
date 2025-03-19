abstract class Car {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract greet(): string

    logMe() {
        return `hello i'm ${this.name}`
    }

}

class Audi extends Car {

    constructor(name: string) {
        super(name)
    }

    greet(): string {
        return this.name
    }
}

let car = new Audi("Audi")