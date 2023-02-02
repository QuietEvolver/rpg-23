export default class Character {
  constructor(health, characterType, spellType, age) {
    this.health = health;
    this.characterType = characterType;
    this.spellType = spellType;
    this.age = age;
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

  takeType() {
    if(this.characterType === "wizard") {
      return "wizard";
    } else if(this.characterType === "druid") { 
      return "druid";
    } else if(this.characterType === "warrior") {
      return "warrior";
    } else {
      return "It's too dangerous to go alone, pick a class";
    }
  }

  castSpell() { 
    if(this.health !== 0 && this.spellType === "necromancy") {
      return this.health -= 5;
    } else if {
      return this.health;
    }
  //   } else if(this.spellType === "aging") {
  //     return this.age * 3;
  //   }
  }
};