import {atom, selector} from 'recoil'

const user = {
    name: "Gopal", 
    age: 24,
    userId: "128923829"
}

export const userAtom = atom({
    key: "count", 
    default: user
})

export const userSelector = selector({
    key: "user", 
    get: function({get}) {
        const userData = get(userAtom)
        return userData
    }
})
