export class Counter {
    constructor() {
        this.value = 0
        this.listeners = []
    }

    increment() {
        this.value = this.value + 1
        this.trigger()
    }

    decrement() {
        this.value = this.value - 1
        this.trigger()
    }

    reset() {
        this.value = 0
        this.trigger()
    }

    getCurrentCounter() {       
        return this.value
    }

    subscribe(listener) {
        this.listeners.push(listener)
    } 

    trigger() {
        this.listeners.forEach(listener => {
            listener(this.value)
        })
    }

}



