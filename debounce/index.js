module.exports = function debounce(fn, timeout) {
  var timer;

  return function() {
    var args = arguments,
        ctx = this;

    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(ctx, args);
    }, timeout);
  };
};