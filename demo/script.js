/**
 * Created by luisf on 10/05/2017.
 */


var sam = new TE.Snake("Sammy the Python");
var tom = new TE.Horse("Tommy the Palomino");

var another = new TE.AnotherAnimal();

var x = TE.XPTO;

console.log(x);

if (tom instanceof TE.Animal){
    console.log('yay');
}

sam.move();
tom.move(34);