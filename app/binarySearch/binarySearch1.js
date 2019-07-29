function BinarySearch (item, list) {
  return {
    chop: function (item, list) {
      
      let init = 0,
          end = list.length - 1,
          med = getHalf(init, end);
      while (init <= end) {
        let itemFound = list[med];
        if (itemFound === item) {
          return med;
        }
        if(med === end) {
          return -1;
        }
        if(itemFound < item) {
          init = med;
        } else {
          end = med;
        }
        let newMed = getHalf(init, end);
        if(med === newMed) {
          med = end; 
        } else {
          med = getHalf(init, end);
        }
      }
      return -1;
    }
  }
}

function getHalf(init, end) {
  return Math.floor( ( end + init ) / 2);
}

module.exports = BinarySearch;