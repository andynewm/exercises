module.exports = function invertTree(root) {
  var left = root.left,
      right = root.right;

  if (left) {
    root.right = left;
    invertTree(left);
  }
  if (right) {
    root.left = right;
    invertTree(right);
  }
};