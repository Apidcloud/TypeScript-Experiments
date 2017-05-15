/**
 * Created by luisf on 10/05/2017.
 */

export default class Animal {
    constructor(public name) {
    }

    move(meters) {
        console.log(this.name + " teste " + meters + "m.");
    }

    simpleReturn(str:string) {
        console.log(str);
        return str;
    }
}