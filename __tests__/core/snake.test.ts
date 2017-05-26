/**
 * Created by luisf on 25/05/2017.
 */

import Snake from '../../src/core/snake';

test('Expect a number and input to be the same as output', async () => {

    expect.assertions(2);

    let animal = new Snake("donkeySnake");
    let input = "sample input";

    const result = await animal.move();

    expect(typeof result).toBe('number');

    const result2 = animal.simpleReturn(input);

    expect(result2).toBe(input);

});

