class BinarySearch{
  constructor() {
    this.init = 0;
    this.med;
    this.end;
  }

  calculateMed() {
    this.med = Math.floor( ( this.end + this.init ) / 2 );
  }

  itemIsNotFoundYet() {
    return this.init <= this.end;
  }

  itemNotExists(){
    return this.med === this.init;
  }

  chop (item, list) {
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
      if (itemFounded > item) {
        this.end = this.med;
      } else {
        this.init = this.med;
      }
      let oldMed = this.med;
      this.calculateMed();
      if(this.med === oldMed){
        this.med = this.end;
      }
    }
    return -1;
  }
}

module.exports = BinarySearch;