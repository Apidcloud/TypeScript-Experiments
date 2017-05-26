/**
 * Created by luisf on 10/05/2017.
 */

export default class Animal {
    constructor(public name) {
    }

    async move(meters: number): Promise<number> {
        console.log(this.name + " moved " + meters + "m.");
        return meters;
    }

    simpleReturn(str:string) {
        console.log(str);
        return str;
    }
}