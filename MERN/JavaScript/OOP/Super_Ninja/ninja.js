class Ninja{
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    punch() {
        this.speed -= 1;
        this.strength -= 2;
        console.log("Rawwrrr!");
        return this;
    }

    duck() {
        this.health += 10;
        this.speed -= 1;
        this.strength -= 2;
        console.log("Ahhhhh");
        return this;
    }

    flip() {
        this.health += 10;
        this.speed -= 10;
        console.log("hooooooo!")
        return this;
    }

    hit() {
        this.health -= 300;
        this.speed -= 10;
        this.strength += 10;
        console.log("uhg");
        return this;
    }

    attack(target) {
        target.health -= this.strength;
        console.log(`Yah!! ${this.name} attacked ${target.name}, dealing ${this.strength} damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)
        return this;
    }

    drinkSake() {
        this.health += 100;
        console.log("Hell Yea!");
        return this;
    }

    finishThem(target) {
        target.health -= 5000;
        console.log(`Yah!! ${this.name} attacked ${target.name}, dealing the final blow of 5000 damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)

        if (target.health <= 0) {
            console.log("They're finished!")
        }
        return this;
    }

    sayName() {
        console.log(`Our Ninja is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`The ninja ${this.name} stats are: \nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
        return this;
    }
}

// const ninja1 = new Ninja("Big Man", 1000);
// const ninja2 = new Ninja("The Rock", 1000);

// ninja1.sayName()
// console.log("---------------------------------------");
// ninja1.showStats()
// console.log("---------------------------------------");
// ninja1.punch().punch().punch().punch().punch()
// ninja1.hit()
// console.log("---------------------------------------");
// ninja1.showStats()

// console.log("---------------------------------------");

// ninja2.sayName()
// console.log("---------------------------------------");
// ninja2.showStats()
// console.log("---------------------------------------");
// ninja2.duck().duck().duck().duck()
// ninja2.hit()
// ninja2.punch()
// ninja2.drinkSake()
// console.log("---------------------------------------");
// ninja2.showStats()

module.exports = Ninja;
