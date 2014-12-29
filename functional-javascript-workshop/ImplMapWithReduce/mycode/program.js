
module.exports = function map(arr, fn) {
  return Array.prototype.reduce.call(arr, function (r, x) {
    r[r.length] = fn(x);
    return r;
  }, []);
}
