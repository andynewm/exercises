module.exports = function flattenArray(array) {
  var result = [];

  array.forEach(function flatten (inner) {
    if (Array.isArray(inner)) {
      inner.forEach(flatten);
    } else {
      result.push(inner);
    }
  });

  return result;
};