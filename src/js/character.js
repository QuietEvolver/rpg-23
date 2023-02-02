export default class Character {
  constructor(health, characterType, spellType, age, gainExp) {
    this.health = health;
    this.characterType = characterType;
    this.spellType = spellType;
    this.age = age;
    this.gainExp = gainExp;
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
    } else if (this.spellType === "aging") {
      return this.age * 3;
    } else if (this.spellType === "splinter") {
      return this.health / 4;
    } else {
      return this.health;
    } 
  }

  // checkStats() { 
  //     const exp = this.experience % 2;
  //     return exp;
  // }

  gainExperience() {
    if(this.health !== 0 && this.gainExp === 0) {
      return this.gainExp += 10;
    } else {
      return this.gainExp;
    }
  }

  realmAge() {
    if(this.health !== 0 && this.age === 32) {
      return this.age += 14;
    } else {
      return this.age;
    }

  }
};