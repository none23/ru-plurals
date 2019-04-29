// @flow strict

opaque type AbsInt = number;

export type Numberlike = number | string | null | void;
export type Declensions = [string, string, string];
export type Plural = (number: ?number) => string;

function absInt(number: Numberlike): AbsInt {
  const int = Math.abs(parseInt(number, 10) || 0);
  if (Number.isNaN(int)) {
    throw new TypeError('Invalid number');
  }
  return int;
}

function declensions(one: string, _two?: string, _five?: string): Declensions {
  const two = typeof _two === 'undefined' ? one : _two;
  const five = typeof _five === 'undefined' ? two : _five;
  return [one, two, five];
}

function pluralize(int: AbsInt, _declensions: Declensions) {
  return _declensions[
    int % 100 > 4 && int % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
  ];
}

function plural(one: string, two?: string, five?: string): Plural {
  return (number: Numberlike) =>
    pluralize(absInt(number), declensions(one, two, five));
}

export default plural;
