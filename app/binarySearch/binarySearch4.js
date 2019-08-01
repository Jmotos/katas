function BinarySearch () {
  function getMiddlePosition(init, end) {
    return Math.floor(( init + end ) / 2 );
  }
  return {
    chop: function (item, list) {
      let init = 0,
          end = list.length - 1,
          middle = getMiddlePosition(init, end);
      while(init <= end) {
        let foundItem = list[middle];
        if(foundItem === item) {
          return middle;
        }
        if(init === middle) {
          return -1;
        }
        if(foundItem > item) {
          end = middle;
          middle = getMiddlePosition(init, end);
        }
      }
      return -1;
    }
  };
}

module.exports = BinarySearch;