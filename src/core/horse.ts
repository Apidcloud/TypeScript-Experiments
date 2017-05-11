/**
 * Created by luisf on 11/05/2017.
 */

import Animal from 'core/animal';

export default class Horse extends Animal {
    constructor(public name) {
        super(name);
    }
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}