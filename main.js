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
            return this.isHealthy = false
        }

        this.food -= 1
    }

}

class Doctor extends Traveler {
    constructor(name,) {
        super(name,)
    
    }
    heal(traveler) {
      traveler.isHealthy = true
    }

  }



class Hunter extends Traveler {

    constructor(name) {
        super(name)
        this.name = name
        this.food = 2

    }
    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food < 2) {
            this.food -= this.food
            return this.isHealthy = false
        }
        this.food -= 2

    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits

        }

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
        console.log(this.passengers)
        const healthy = this.passengers.some(person => person.isHealthy === false)
        return healthy 
        

    }
    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalNumber += this.passengers[index].food
        }
        return totalNumber
    }

}
