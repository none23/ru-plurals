"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plural = plural;
exports.format = format;
exports.defaultFormat = defaultFormat;
exports.default = void 0;

// N - number parameter (e.g. or ?number)
// R - retyrn type
function _absInt(number) {
  const int = Math.abs(parseInt(number, 10) || 0);

  if (Number.isNaN(int)) {
    throw new TypeError('Invalid number');
  }

  return int;
}

function _declensions(one, _two, _five) {
  const two = typeof _two === 'undefined' ? one : _two;
  const five = typeof _five === 'undefined' ? two : _five;
  return [one, two, five];
}

function _pluralize(int, declensions) {
  return declensions[int % 100 > 4 && int % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]];
}

function plural(one, two, five) {
  return number => _pluralize(_absInt(number), _declensions(one, two, five));
}

function format(formatter, one, two, five) {
  return number => formatter(number, plural(one, two, five)(number));
}

function defaultFormat(one, two, five) {
  return number => [number, plural(one, two, five)(number)].join(' ');
}

var _default = defaultFormat;
exports.default = _default;