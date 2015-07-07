module.exports = function throttlePromises(limit, arr) {
  return new Promise(function (resolve) {
    var running = 0,
        results = [],
        x = 0;

    function go(i) {
      running++;
      arr[i]().then(function (result) {
        running--;
        results[i] = result;
        doMore();
      });
    }

    function doMore() {
      while (running < limit && x < arr.length) {
        go(x++);
      }
      if (!running) {
        resolve(results);
      }
    };

    doMore();
  });
};