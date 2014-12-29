function Spy(target, method) {
  function SpyClass() {
    var fn = target[method],
        that = this;
    this.count = 0;
    target[method] = function () {
      that.count ++;
      return fn.apply(target, Array.prototype.slice.call(arguments));
    };
  }
  return new SpyClass();
}

module.exports = Spy;
