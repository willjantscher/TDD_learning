class Machine {
    constructor() {
        this.inventory = [{"snappea crisps": 350}, {"pocky": 250}, {"peanut butter cups": 200}]
    }
    seeSelections() {
        return this.inventory;
    }
}





//need to export in order to allow the test script to execute this
module.exports = Machine;
//this exports the object that is spelled out 

