//main.js
//reading in source files
const SubLocation = require('./SubLocation');
const UserProfile = require('./UserProfile');
const History = require('./History');
const Money = require('./Money');


  // Call the main function to run the program
  console.log("Welcome to PocketCash!");
  //testing UserProfile
  const James = new UserProfile("James", "abc123", "james@utsa.edu");
  James.printName();
  James.printPW();
  //testing SubLocations
  console.log("\n");
  const House = new SubLocation("House");
  const Kitchen = new SubLocation("Kitchen");
  const Bedroom = new SubLocation("Bedroom");
  const Nightstand = new SubLocation("Nightstand");
  const TopDrawer = new SubLocation("TopDrawer");
  const FalseBottom = new SubLocation("FalseBottom");
  const BottomDrawer = new SubLocation("BottomDrawer");
  const SilverwareDrawer = new SubLocation("SilverwareDrawer");
  const DiningRoom = new SubLocation("DiningRoom");
  const Garage = new SubLocation("Garage");
  const Attic = new SubLocation("Attic");
  const Basement = new SubLocation("Basement");

James.addLocation(House);
James.addLocation(Kitchen);
James.addLocation(Bedroom);
James.addLocation(Nightstand);
James.addLocation(TopDrawer);
James.addLocation(FalseBottom);
James.addLocation(BottomDrawer);
James.addLocation(SilverwareDrawer);
James.addLocation(DiningRoom);
James.addLocation(Garage);
James.addLocation(Attic);
James.addLocation(Basement);

// Display user's locations]
//console.log("Available locations:");
James.listLocations();


House.addSubLocation(Kitchen);
House.addSubLocation(Bedroom);
House.addSubLocation(DiningRoom);
Bedroom.addSubLocation(Nightstand);
House.addSubLocation(Attic);
House.addSubLocation(Basement);
House.addSubLocation(Garage);
Nightstand.addSubLocation(TopDrawer);
TopDrawer.addSubLocation(FalseBottom);
Nightstand.addSubLocation(BottomDrawer);
Kitchen.addSubLocation(SilverwareDrawer);



console.log("\nLocation Hierarchy:");
House.displayHierarchy();

// testing money features
James.createMoney("GiftCard", "Gift", "2024-10-27", 50);
James.createMoney("CashDeposit", "Cash", "2024-10-28", 100);
James.createMoney("PrepaidCard", "Gift", "2024-9-15", 25);
James.createMoney("SNAP Card", "EBT", "2024-10-1", 250);



// Display transaction history for James
console.log("\n");
James.displayHistory();

const grandmasPearls = new Money("Jewels", "10262024", 200);
const heirloomEarrings = new Money("Jewels", "08152024", 150);
const heirloomNecklace = new Money("Jewels", "08152024", 200);
const porcelainDishes = new Money("Other", "09232024", 500);
const vehicle = new Money("other", "07122015", 20000);
console.log("\n");

// Now call addMoney on the location correctly
Nightstand.addMoney(grandmasPearls);
Kitchen.addMoney(porcelainDishes);
Bedroom.addMoney(heirloomEarrings);
Bedroom.addMoney(heirloomNecklace);
Garage.addMoney(vehicle);


Bedroom.printMoney();
console.log("\n");
Nightstand.printMoney();
console.log("\n");
Garage.printMoney();