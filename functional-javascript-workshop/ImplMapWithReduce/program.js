
module.exports = function map(arr, fn) {
  return Array.prototype.reduce.call(arr, function (r, x) {
    return Array.prototype.concat.call(r, fn(x));
  }, []);
}
