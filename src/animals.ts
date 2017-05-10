/**
 * Created by luisf on 10/05/2017.
 */

export class Animal {
    constructor(public name) { }
    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

export class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

export class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}