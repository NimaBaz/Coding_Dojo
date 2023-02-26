const Ninja = require('./ninja.js')

class Master extends Ninja {
    constructor(name, wisdom) {
        super(name, 1000, 1000, 1000)
        this.wisdom = 10;
    }

    speakWisdom() {
        this.wisdom += 10;
        this.health += 50;
        this.speed += 10;
        this.strength += 20;
        console.log("Find inner peace");
        return this;
    }

    flip() {
        super.duck();
        this.health += 10;
        this.speed -= 10;
        console.log("hooooooo!")
        return this;
    }

    attack() {
        this.health += 10;
        this.speed -= 10;
        console.log("Yah!!")
        return this;
    }
}

const Nima = new Master("Nima Bazofti")

console.log("---------------------------------------");
Nima.showStats()
console.log("---------------------------------------");
Nima.flip()
console.log("---------------------------------------");
Nima.showStats()
console.log("---------------------------------------");
Nima.attack()
console.log("---------------------------------------");
Nima.showStats()
console.log("---------------------------------------");
Nima.speakWisdom()
console.log("---------------------------------------");
Nima.showStats()
