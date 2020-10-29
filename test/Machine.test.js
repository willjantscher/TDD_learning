const Machine = require('../src/Machine')    //is the name of the javascript file that is to be run, can include the .js or not
//asking for ability to use this file


//planning for the script, require the script that we are testing
//where the file is

//test goes inside the describe block

//first argument is the description of the program we are testing, within has multiple it() tests
describe('The vending machine', () => {
    //it does a specific test 
    it('should have items', () => {
        // SEAT - acronym for testing

        // setup
        const vendingMachine = new Machine();   //try to create an instance of the class
        const expected = [ {'snappea crisps': 350}, {'pocky': 250},{'peanut butter cups': 200} ];   //what we expect to come out of the program

        // execute/exercise
        const actual = vendingMachine.seeSelections();  //what is actually returned

        // assert
        expect(actual).toEqual(expected);       //to pass, actual should equal expected

        // teardown, if needed 
    })
})



//to run the test, type 
//typing node, makes it look for a module to run at your location
//want to write npm test and run the test   - the test is defined in the package.json file!!!!

//npx jest          will run dependancies and packages that you have        same as node_modules/jest/bin/jest.js
//set test as jest inside package.json

//run npm test now to run the test


//how does running npm test now which file to run?
