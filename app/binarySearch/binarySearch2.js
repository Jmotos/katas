class BinarySearch{

  chop (item, list) {
    let init = 0,
        end = list.length - 1,
        med = getHalf(init, end);
    if(list[med] === item) {
      return med;
    }
    return -1;
  }
}

function getHalf(init, end) {
  let half = end - init;
  return Math.floor( half / 2 + init );
}

module.exports = BinarySearch;