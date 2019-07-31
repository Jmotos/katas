function BinarySearch (item, list) {

  var _list = [];

  function getHalf(init, end) {
    return Math.floor( ( end + init ) / 2);
  }

  function binarySearch(init, end, item) {
    let med = getHalf(init, end),
        itemFounded = _list[med];
    if(itemFounded === item) {
      return med;
    }
    if (init === med) {
      return -1;
    }
    if(itemFounded > item) {
      return binarySearch(init, med, item);
    }

  }

  return {
    chop: function (item, list) {
      _list = list;
      return binarySearch(0, Math.max(list.length - 1 , 0), item);
      // let init = 0,
      //     end = list.length - 1,
      //     med = getHalf(init, end),
      //     itemFounded = list[med];
      
      // if(itemFounded === item) {
      //   return med;
      // }
      // return -1;
    }
  };
}

module.exports = BinarySearch;