// 需要插件@babel/plugin-proposal-class-properties

class Message {
    #message = "Howdy"

    greet() { console.log(this.#message) }
}

const greeting = new Message()

greeting.greet() // Howdy
// console.log(greeting.#message) // 报错 Private name #message is not defined