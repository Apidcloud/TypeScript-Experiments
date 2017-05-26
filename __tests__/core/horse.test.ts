/**
 * Created by luisf on 25/05/2017.
 */

import Horse from '../../src/core/horse';

test("Returns exactly the input", async () => {

    expect.assertions(1);

    let animal;
    let input = "sample input";

    animal = new Horse("horseDonkey");

    await animal.move();

    const result = animal.simpleReturn(input);
    expect(result).toBe(input);

});