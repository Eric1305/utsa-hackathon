//cash.js

class Money{
    constructor(type, dateLogged, value = 0) {
        this.type = type;                // The type of money it is. EX "cash, EBT, gift card"
        this.dateLogged = dateLogged;  // the date it was logged
        this.value = value;              // Value or price of the item
      }
      updateValue(value) {
        this.value += amount;
        if (this.quantity < 0) this.quantity = 0; // update this value with a double 
      }
      updateType(type) {
        this.type = type // update type to be a string 
      }
      updateDateLogged(dateLogged){
        this.dateLogged = dateLogged// update date logged to be an int
      }
      

}


module.exports = Money;