
export default class Character {
  constructor(health, characterClass) {
    this.health = health;
    this.characterClass = characterClass;
  }

  healthPlusOne() {
    if(this.health !== 0) {
    return this.health += 1;
    } else {
      return this.health;
    }
  }

  healthMinusOne() {
    if(this.health !== 0) {
      return this.health -= 1;
    } else {
      return this.health;
    }
  }
  
  equipShield() {
    if(this.health !== 0) {
      return this.health += 24;
    } else {
      return this.health;
    }
  }

  takeClass() {
    if(this.characterClass === "wizard") {
      return "wizard";
    } else if(this.characterClass === "druid") { 
      return "druid";
    } else if(this.characterClass === "warrior") {
      return "warrior";
    } else {
      return "It's too dangerous to go alone, pick a class";
    }
  }
  
};