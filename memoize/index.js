module.exports = function memoize(fn) {
  var memory = {};

  return function () {
    var key = JSON.stringify(arguments);

    return key in memory
      ? memory[key]
      : memory[key] = fn.apply(this, arguments);
  };
};