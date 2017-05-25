/**
 * Created by luisf on 11/05/2017.
 */

import Animal from 'core/animal';

export default class Snake extends Animal {
    constructor(public name) {
        super(name);
    }

    async move(): Promise<number> {

        const dress = () => {
            console.log("Dressing....");
        };

        (async () => {
            console.log('before sleeping');
            await asyncSleep(1000);
            //console.log('after sleeping');
        })();

        dress();
        console.log("Slithering...");

        const moveResult = super.move(5);

        return Promise.resolve(moveResult);
    }
}

function asyncSleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
}