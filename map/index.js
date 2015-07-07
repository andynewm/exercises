module.exports = function map(array, fn, context) {
  var result = [];

  array.forEach(function (item, index) {
    result.push(fn.call(context, item, index, array));
  });

  return result;
};