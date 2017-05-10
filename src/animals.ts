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

        const dress = () => {
            console.log("Dressing....");
        };

        function sleep(ms = 0) {
            return new Promise(r => setTimeout(r, ms));
        }

        (async () => {
            console.log('before sleeping');
            await sleep(1000);
            console.log('after sleeping');
        })();

        dress();
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