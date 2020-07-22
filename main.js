class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            return this.ishealthy = false
        }

        this.food -= 1
    }

}

class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }

        }

    }
    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalNumber += this.passengers[index].food
        }
        return totalNumber
    }

}
