class Randomizer {
  //list of all items to be selected at random
  items;

  constructor(items) {
    //store the use set of items
    this.items = items;
  }

  //returns a random entry in the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

class FortuneCookie extends Randomizer {
  constructor(element) {
    super([
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
    ]);
    //HTML output element to display fortune/text
    this.outputElement = element;
    //Set if the fortune cookie has been opened or not
    this.opened = false;
  }

  showFortune() {
    //If the fortune has not been open, open the fortune cookie
    if (this.opened === false) {
      let fortune = this.pickRandom();
      this.outputElement.innerHTML = fortune;
      this.opened = true;
    }
  }

  //Get new fortune cookie
  resetFortune() {
    this.outputElement.innerHTML = "Please open your cookie";
    this.opened = false;
  }
}

let myFortune = new FortuneCookie(document.getElementById("fortune"));
