function random(len: number) {
    const options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_~";
    const length = options.length
    let randomString = ""
    for (let i = 0; i <= len; i++) {
        randomString+=options[Math.floor(Math.random() * length)]
    }

    return randomString
}

export {random}