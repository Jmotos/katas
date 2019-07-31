function BinarySearch (item, list) {
  function getHalf(init, end) {
    return Math.floor( ( end + init ) / 2);
  }

  return {
    chop: function (item, list) {
      let init = 0,
          end = list.length - 1,
          med = getHalf(init, end),
          itemFounded = list[med];
      if(itemFounded === item) {
        return med;
      }
      return -1;
    }
  };
}

module.exports = BinarySearch;