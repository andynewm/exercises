module.exports = function jasmineAsync(fn) {
  var x = fn();

  it(x.desc, function() {
    var flag = false;

    runs(function () {
      x.setup(function () { flag = true; })
    });

    waitsFor(function () { return flag });

    runs(x.test);
  });
}
