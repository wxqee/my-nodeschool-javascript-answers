module.exports = function _reduce (arr, fn, init) {
  var head = arr[0],
      tail = arr.slice(1);
  if (arr.length === 0) return [];
  _reduce(tail, fn, fn(init, head));
  return init;
};
