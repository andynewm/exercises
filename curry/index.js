module.exports = function curry (fn) {
    return function () {
        return (function inner () {
            var args = this.concat([].slice.call(arguments));

            return args.length >= fn.length
                ? fn.apply(this, args)
                : inner.bind(args);
        }).apply([], arguments);
    };
};