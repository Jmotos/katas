debugger;
const binarySearch = require('../app/binarySearch/binarySearch1.js')();

describe('Binary Search test batery', () => {
  it('-1, chop(3, [])', () => {
    expect(-1).toEqual(binarySearch.chop(3, []));
  });

  it('assert_equal(-1, chop(3, [1]))', () => {
    expect(-1).toEqual(binarySearch.chop(3, [1]));
  });
  it('assert_equal(0,  chop(1, [1]))', () => {
    expect(0).toEqual(binarySearch.chop(1, [1]));
  });
  it('assert_equal(0,  chop(1, [1, 3, 5]))', () => {
    expect(0).toEqual(binarySearch.chop(1, [1, 3, 5]));
  });
  it('assert_equal(1,  chop(3, [1, 3, 5]))', () => {
    expect(1).toEqual(binarySearch.chop(3, [1, 3, 5]));
  });
  xit('assert_equal(2,  chop(5, [1, 3, 5]))', () => {
    expect(2).toEqual(binarySearch.chop(5, [1, 3, 5]));
  });

  xit('assert_equal(-1, chop(0, [1, 3, 5]))', () => {
    expect(-1).toEqual(binarySearch.chop(0, [1, 3, 5]));
  });
  xit('assert_equal(-1, chop(2, [1, 3, 5]))', () => {
    expect(-1).toEqual(binarySearch.chop(2, [1, 3, 5]));
  });
  xit('assert_equal(-1, chop(4, [1, 3, 5]))', () => {
    expect(-1).toEqual(binarySearch.chop(4, [1, 3, 5]));
  });
  xit('assert_equal(-1, chop(6, [1, 3, 5]))', () => {
    expect(-1).toEqual(binarySearch.chop(6, [1, 3, 5]));
  });
  xit('assert_equal(0, chop(1, [1, 3, 5, 7]))', () => {
    expect(0).toEqual(binarySearch.chop(1, [1, 3, 5, 7]));
  });
  xit('assert_equal(1, chop(3, [1, 3, 5, 7]))', () => {
    expect(1).toEqual(binarySearch.chop(3, [1, 3, 5, 7]));
  });
  xit('assert_equal(2, chop(5, [1, 3, 5, 7]))', () => {
    expect(2).toEqual(binarySearch.chop(5, [1, 3, 5, 7]));
  });
  xit('assert_equal(3, chop(7, [1, 3, 5, 7]))', () => {
    expect(3).toEqual(binarySearch.chop(7, [1, 3, 5, 7]));
  });
  xit('assert_equal(-1, chop(0, [1, 3, 5, 7]))', () => {
    expect(-1).toEqual(binarySearch.chop(0, [1, 3, 5, 7]));
  });
  xit('assert_equal(-1, chop(2, [1, 3, 5, 7]))', () => {
    expect(-1).toEqual(binarySearch.chop(2, [1, 3, 5, 7]));
  });
  xit('assert_equal(-1, chop(4, [1, 3, 5, 7]))', () => {
    expect(-1).toEqual(binarySearch.chop(4, [1, 3, 5, 7]));
  });
  xit('assert_equal(-1, chop(6, [1, 3, 5, 7]))', () => {
    expect(-1).toEqual(binarySearch.chop(6, [1, 3, 5, 7]));
  });
  xit('assert_equal(-1, chop(8, [1, 3, 5, 7]))', () => {
    expect(-1).toEqual(binarySearch.chop(8, [1, 3, 5, 7]));
  });
});