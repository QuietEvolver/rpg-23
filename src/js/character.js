
export default class Character {
  constructor(health) {
    this.health = health;
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
    
};