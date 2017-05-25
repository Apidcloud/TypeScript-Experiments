/**
 * Created by luisf on 25/05/2017.
 */

import Horse from '../../src/core/horse';

test("Returns exactly the input", async () => {

    let animal;
    let input = "sample input";

    animal = new Horse("horseDonkey");

    await animal.move(5);

    const result = animal.simpleReturn(input);
    expect(result).toBe(input);

});