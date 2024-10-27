const Money = require('./Money');
const SubLocation = require('./SubLocation');

class History{
    constructor() {
      this.historyList = []; // Array to hold nested locations
      this.total= 0.0;
    }
    createMoney(name,type,date,value){
        const moneyEntry = new Money(type, date, value);
        this.total += value;
        // create a string that has the name, type, date, and value, and pus into historyList
        const historyEntry = `Name: ${name}, Type: ${type}, Date: ${date}, Value: ${value}`;
        // Push the string to historyList
        this.historyList.push(historyEntry);
        return moneyEntry;
    }
    deleteMoney(name){
        const index = this.historyList.findIndex(entry => entry.includes(`Name: ${name},`));
        if (index !== -1) {
        this.historyList.splice(index, 1);
    }
    else {
        console.log(`Transaction with name "${name}" not found.`);
    }
}
    displayHistory() {
        console.log("Transaction History:");
        if (this.historyList.length === 0) {
            console.log("No transactions recorded.");
        } else {
            this.historyList.forEach((entry, index) => {
                
                console.log( `  ${index + 1}. ${entry}`);
            });
        }
        console.log('\nTotal: $'+ this.total);
    }
}
module.exports = History;