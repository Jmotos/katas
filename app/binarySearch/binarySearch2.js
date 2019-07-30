class BinarySearch{
  constructor() {
    this.init = 0;
    this.med;
    this.end;
  }

  calculateMed() {
    let newMed = Math.floor( ( this.end + this.init ) / 2 );
    this.med = ( this.med === newMed ) ? this.end : newMed;
  }

  calculatePositions(itemFounded, itemToFound) {
    if (itemFounded > itemToFound) {
      this.end = this.med;
    } else {
      this.init = this.med;
    }
    this.calculateMed();
  }

  itemIsNotFoundYet() {
    return this.init <= this.end;
  }

  itemNotExists(){
    return this.med === this.init;
  }

  chop (item, list) {
    this.init = 0;
    this.end = list.length - 1;
    this.calculateMed();
    
    while(this.itemIsNotFoundYet()) {
      let itemFounded = list[this.med];
      if(itemFounded === item) {
        return this.med;
      }
      if(this.itemNotExists()) {
        return -1;
      }
      this.calculatePositions(itemFounded, item);
    }
    return -1;
  }
}

module.exports = BinarySearch;