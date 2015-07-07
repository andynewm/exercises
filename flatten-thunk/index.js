module.exports = function flattenThunk(fn) {
  return function(callback) {
    fn(function flatten (err, result) {
      if (typeof(result) == 'function') {
        result(flatten);
      } else {
        callback(null, result);
      }
    });
  };
};