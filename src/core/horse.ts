/**
 * Created by luisf on 11/05/2017.
 */

import Animal from 'core/animal';

export default class Horse extends Animal {
    constructor(public name) {
        super(name);
    }
    async move(meters: number): Promise<number> {
        console.log("Galloping...");

        return Promise.resolve(super.move(45));
    }
}