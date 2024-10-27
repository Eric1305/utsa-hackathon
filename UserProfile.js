//Profile.js

const Money = require('./Money');
const SubLocation = require('./SubLocation');
const History = require('./History');


class UserProfile{
    constructor(userName, pw, email){
        this.userName = userName;
        this.pw = pw;
        this.assignedLocations = [];//array to hold main locations assigned to user
        this.history = new History();
        this.email = email;
    }
    addLocation(location) {
        this.assignedLocations.push(location);
      }
    
    removeLocation(location) {
    const index = this.assignedLocations.findIndex(loc => loc.name === locationName);
    if (index !== -1) {
        this.assignedLocations.splice(index, 1);
        console.log(`Removed location: ${locationName} from user: ${this.userName}`);
    } else {
        console.log(`Location "${locationName}" not found for user: ${this.userName}.`);
    }
    }

    listLocations() {
        console.log(`Locations available for ${this.userName}:`);
        if (this.assignedLocations.length === 0) {
            console.log("  No locations found.");
        } else {
            this.assignedLocations.forEach((loc, index) => {
                console.log(`  ${index + 1}. ${loc.name}`);
            });
        }
    }

    printName() {
        console.log("\nYour username: " + this.userName);
    }
    printPW() {
        console.log("\nYour password: " + this.pw);
    }
    // Method to create a money entry in the user's transaction history
    createMoney(name, type, date, value) {
        this.history.createMoney(name, type, date, value);
    }

    // Method to display the user's transaction history
    displayHistory() {
        this.history.displayHistory();
    }
}

module.exports = UserProfile;
