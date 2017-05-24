/**
 * Created by luisf on 10/05/2017.
 */
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    Animal.prototype.simpleReturn = function (str) {
        console.log(str);
        return str;
    };
    return Animal;
})();
exports["default"] = Animal;
