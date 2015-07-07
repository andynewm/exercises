module.exports = function throttle(fn, interval) {
  var queued = null,
      blocked = false;

  function consume() {
    if (queued) {
      blocked = true;
      fn.apply(queued.ctx, queued.args);
      queue = null;
      setTimeout(consume, interval);
    } else {
      blocked = false;
    }
  }

  return function () {
    queued = {ctx: this, args: arguments};
    if (!blocked) { 
      consume();
    }
  };
};