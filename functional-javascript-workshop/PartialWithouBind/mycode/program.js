module.exports = function (namespace) {
  return function() {
    console.log.apply(
      console,
      [namespace + " " + Array.prototype.slice.apply(arguments).join(' ')]
    );
  };
}
