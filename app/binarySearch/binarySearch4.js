function BinarySearch () {
  return {
    chop: function (item, list) {

      if(list[0] === item) {
        return 0;
      }
      return -1;
    }
  };
}

module.exports = BinarySearch;