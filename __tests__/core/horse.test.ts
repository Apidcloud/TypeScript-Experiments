/**
 * Created by luisf on 25/05/2017.
 */

import Horse from '../../src/core/horse';

test("Returns exactly the input", () => {

    let animal;
    let input = "sample input";
    let expectedResult = "sample input";

    animal = new Horse("horseDonkey");
    animal.move(3);
    const result = animal.simpleReturn(input);
    expect(result).toBe(expectedResult);

});