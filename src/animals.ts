/**
 * Created by luisf on 10/05/2017.
 */

class Animal {
    constructor(public name) { }
    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);