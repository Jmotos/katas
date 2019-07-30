class BinarySearch{
  constructor() {
    this.init = 0;
    this.med;
    this.end;
  }

  calculateMed() {
    this.med = Math.floor( ( this.end + this.init ) / 2 );
  }

  itemIsNotFound() {
    return this.init <= this.end;
  }

  itemNotExists(){
    return this.med === this.end;
  }

  chop (item, list) {
    this.end = list.length - 1;
    this.calculateMed();
    
    while(this.itemIsNotFound) {
      let itemFounded = list[this.med];
      if(itemFounded === item) {
        return this.med;
      }
      if(this.itemNotExists()) {
        return -1;
      }
      if (itemFounded > item) {
        this.end = this.med;
        this.calculateMed();
      }
    }
    return -1;
  }
}

module.exports = BinarySearch;