//Location.js
//load in source file
const Money = require('./Money');


class SubLocation{
        constructor(name) {
          this.name = name;
          this.subLocations = []; // Array to hold nested locations
          this.moneyList = []; // Array of money entries 
        }
      
        // Add a new sub-location
        addSubLocation(location) {
          this.subLocations.push(location);
        }
        //to remove a location
        removeSubLocation(locationName) {
            const index = this.subLocations.findIndex(subLoc => subLoc.name === locationName);
            if (index !== -1) {
              this.subLocations.splice(index, 1);
              console.log(`Removed location: ${locationName}`);
            } else {
              console.log(`Location "${locationName}" not found.`);
            }
          }
      
        // List all sub-locations
        listSubLocations() {
          return this.subLocations.map(subLoc => subLoc.name);
        }
      
        // Recursive function to display the full hierarchy
        displayHierarchy(level = 0) {
          console.log(" ".repeat(level * 2) + this.name);
          this.subLocations.forEach(subLoc => subLoc.displayHierarchy(level + 1));
        }

        addMoney(money) {
          this.moneyList.push(money); // Corrected from this.money to this.moneyList
      }
  
      // Remove an item from the location by name
      removeMoney(moneyName) {
          this.moneyList = this.moneyList.filter(money => money.type !== moneyName); // Corrected to use money.type
      }
  
      // List all items in the location
      listMoneyList() {
          return this.moneyList.map(money => money.type); // Changed to return money.type for clarity
      }

      printMoney() {
        console.log(`Money in ${this.name}:`);
        if (this.moneyList.length === 0) {
            console.log("  No money entries found.");
        } else {
            this.moneyList.forEach((money, index) => {
                console.log(`  ${index + 1}. Type: ${money.type}, Value: ${money.value}, Date Logged: ${money.dateLogged}`);
            });
        }
    }
    
      }
    
module.exports = SubLocation;