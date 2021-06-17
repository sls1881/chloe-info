// IMPORT MODULES under test here:
import { yesAnswer } from '../utils.js';

const test = QUnit.test;

test('It should increment by one when a word that starts with a Y is provided', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = yesAnswer('Yo');

    expect.equal(actual, expected);
});

test('It should not increment by one when a word that does not start with Y is provided', (expect) => {

    const expected = false;

    const actual = yesAnswer('No');

    expect.equal(actual, expected);

});


