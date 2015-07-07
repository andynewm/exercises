function MiddleWare() {
    this.used = [];
};

MiddleWare.prototype.use = function(fn) {
    this.used.push(fn);
};

MiddleWare.prototype.go = function (callback) {
    var wares = this.used.slice(0);
    (function eat () {
        var next = wares.shift();
        if (next) {
            next(eat);
        }
        else {
            callback();
        }
    })();
};

module.exports = MiddleWare;