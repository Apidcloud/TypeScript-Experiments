/**
 * Created by luisf on 11/05/2017.
 */

import Animal from 'core/animal';

export default class Snake extends Animal {
    constructor(public name) {
        super(name);
    }
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