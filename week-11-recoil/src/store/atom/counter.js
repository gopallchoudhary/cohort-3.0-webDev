import { atom, selector } from "recoil";

export const counterAtom = atom({
    key: 'counter', 
    default: 0
})

export const evenSelector = selector({
    key: "isEvenSelecot",
    get: function({get}) {
        const currentCount = get(counterAtom)
        const isEven = (currentCount % 2 == 0)
        return isEven
    }
})