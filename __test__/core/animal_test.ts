/**
 * Created by luisf on 15/05/2017.
 */

import { expect } from 'chai';
import 'mocha';

import Animal from '../../src/core/animal';

describe("Animal suite", () => {

    let animal;
    let input = "sample input";
    let expectedResult = "sample input";


    it("returns the input", () =>{

        animal = new Animal("donkey");
        const result = animal.simpleReturn(input);
        expect(result).to.equal(expectedResult);
    })

});