module.exports = function once(fn) {
  var called = false,
      result = null;

  return function () {
    if (!called) {
      called = true;
      result = fn.apply(this, arguments);
    }

    return result;
  };
};