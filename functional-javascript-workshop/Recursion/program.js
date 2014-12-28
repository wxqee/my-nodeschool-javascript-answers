module.exports = function _reduce (arr, fn, init) {
  return (function _reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return _reduceOne(index + 1, fn(value, arr[index], arr));
  })(0, init);
};
