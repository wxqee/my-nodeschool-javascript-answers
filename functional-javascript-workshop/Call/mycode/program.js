function duckCount() {
  return Array.prototype.reduce.call(arguments, function (counts, item) {
    counts += Object.prototype.hasOwnProperty.call(item, 'quack') ? 1 : 0;
    return counts;
  }, 0);
}

// var notDuck = Object.create({quack: true});
// var duck = {quack: true};
// console.log(duckCount(duck, notDuck));
module.exports = duckCount;

