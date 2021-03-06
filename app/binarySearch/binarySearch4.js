function BinarySearch() {
  const NOT_FOUND = -1;

  function getMiddlePosition(init, end) {
    return Math.floor((init + end) / 2);
  }
  function itemNotFound(init, end) {
    return init <= end;
  }
  function itemFounded(foundItem, item) {
    return foundItem === item;
  }
  function itemNotExists(init, middle) {
    return init === middle;
  }
  function itemNotInTheHigherHalf(foundItem, item) {
    return foundItem > item;
  }
  function onlyLeftTheLast(middle, nextMiddle) {
    return middle === nextMiddle;
  }

  return {
    chop: function (item, list) {
      let init = 0,
        end = list.length - 1,
        middle = getMiddlePosition(init, end);

      while (itemNotFound(init, end)) {
        let foundItem = list[middle];

        if (itemFounded(foundItem, item)) {
          return middle;
        }
        if (itemNotExists(init, middle)) {
          return NOT_FOUND;
        }
        if (itemNotInTheHigherHalf(foundItem, item)) {
          end = middle;
        } else {
          init = middle;
        }
        let nextMiddle = getMiddlePosition(init, end);
        if (onlyLeftTheLast(middle, nextMiddle)) {
          middle = end;
        } else {
          middle = nextMiddle;
        }
      }
      return NOT_FOUND;
    }
  };
}

module.exports = BinarySearch;