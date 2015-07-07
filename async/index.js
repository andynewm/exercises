exports.sequence = function sequence(fns) {
  return function (callback) {
    var i = 0;

    (function next(err, value) {
      var fn = fns[i++];
      if (fn) {
        fn(next, value);
      }
      else {
        callback(err, value);
      }
    })();
  }
};

exports.race =  function race(fns) {
  return function (callback) {
    var done = false;

    fns.forEach(function (fn) {
      fn(function (err, result) {
        if (!done) {
          done = true;
          callback(err, result);
        }
      });
    });
  };
};

exports.parallel = function parallel(fns) {
  return function (callback) {
    var results = [],
        expected = fns.length;

    fns.forEach(function (fn, i) {
      fn(function (err, result) {
        results[i] = result;

        if (!--expected) {
          callback(null, results);
        }
      });
    });
  };
};