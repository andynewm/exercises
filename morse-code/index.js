module.exports = function morseCode(opts, callback) {

  function morseMessage(message) {
    return message.split(' ')
      .map(morseWord)
      .join('7');
  }

  function morseWord(word) {
    return word.split('')
      .map(morseLetter)
      .join('3');
  }

  function morseLetter(letter) {
    return opts.codes[letter].split('')
      .map(morseSymbol)
      .join('1');
  }

  function morseSymbol(symbol) {
    return {'.': '1', '-': '3'}[symbol];
  }

  var timePeriods = morseMessage(opts.message)
    .split('')
    .map(function (n) { return parseInt(n); });

  (function step() {
    opts.toggle();
    var next = timePeriods.shift();
    if (next) {
      opts.timeouter(step, next);
    } else {
      callback();
    }
  })();
};