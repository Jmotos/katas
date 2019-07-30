const assert = require('assert'),
      // binarySearch = require('../app/binarySearch/binarySearch1.js')(),
      BinarySearch = require('../app/binarySearch/binarySearch2.js'),
      binarySearch = new BinarySearch();

describe('Binary Search test batery', () => {
  it('-1, chop(3, [])', (done) => {
    assert.equal(-1, binarySearch.chop(3, []));
    done();
  });

  it('assert_equal(-1, chop(3, [1]))', (done) => {
    assert.equal(-1, binarySearch.chop(3, [1]));
    done();
  });
  it('assert_equal(0,  chop(1, [1]))', (done) => {
    assert.equal(0, binarySearch.chop(1, [1]));
    done();
  });
  it('assert_equal(0,  chop(1, [1, 3, 5]))', (done) => {
    assert.equal(0, binarySearch.chop(1, [1, 3, 5]));
    done();
  });
  xit('assert_equal(1,  chop(3, [1, 3, 5]))', (done) => {
    assert.equal(1, binarySearch.chop(3, [1, 3, 5]));
    done();
  });
  xit('assert_equal(2,  chop(5, [1, 3, 5]))', (done) => {
    assert.equal(2, binarySearch.chop(5, [1, 3, 5]));
    done();
  });

  xit('assert_equal(-1, chop(0, [1, 3, 5]))', (done) => {
    assert.equal(-1, binarySearch.chop(0, [1, 3, 5]));
    done();
  });
  xit('assert_equal(-1, chop(2, [1, 3, 5]))', (done) => {
    assert.equal(-1, binarySearch.chop(2, [1, 3, 5]));
    done();
  });
  xit('assert_equal(-1, chop(4, [1, 3, 5]))', (done) => {
    assert.equal(-1, binarySearch.chop(4, [1, 3, 5]));
    done();
  });
  xit('assert_equal(-1, chop(6, [1, 3, 5]))', (done) => {
    assert.equal(-1, binarySearch.chop(6, [1, 3, 5]));
    done();
  });
  xit('assert_equal(0, chop(1, [1, 3, 5, 7]))', (done) => {
    assert.equal(0, binarySearch.chop(1, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(1, chop(3, [1, 3, 5, 7]))', (done) => {
    assert.equal(1, binarySearch.chop(3, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(2, chop(5, [1, 3, 5, 7]))', (done) => {
    assert.equal(2, binarySearch.chop(5, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(3, chop(7, [1, 3, 5, 7]))', (done) => {
    assert.equal(3, binarySearch.chop(7, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(-1, chop(0, [1, 3, 5, 7]))', (done) => {
    assert.equal(-1, binarySearch.chop(0, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(-1, chop(2, [1, 3, 5, 7]))', (done) => {
    assert.equal(-1, binarySearch.chop(2, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(-1, chop(4, [1, 3, 5, 7]))', (done) => {
    assert.equal(-1, binarySearch.chop(4, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(-1, chop(6, [1, 3, 5, 7]))', (done) => {
    assert.equal(-1, binarySearch.chop(6, [1, 3, 5, 7]));
    done();
  });
  xit('assert_equal(-1, chop(8, [1, 3, 5, 7]))', (done) => {
    assert.equal(-1, binarySearch.chop(8, [1, 3, 5, 7]));
    done();
  });
});