/**
 * Created by luisf on 15/05/2017.
 */

import Animal from '../../src/core/animal';

test("Returns exactly the input", () => {

    let animal;
    let input = "sample input";
    let expectedResult = "sample input";

    animal = new Animal("donkey");
    animal.move(3);
    const result = animal.simpleReturn(input);
    expect(result).toBe(expectedResult);

});