// @flow strict

opaque type PositiveInt = number;

function toPositiveInt(number: ?number): PositiveInt {
  return Math.abs(parseInt(number, 10));
}

type Declensions = [string, string, string];

function declensions(one: string, _two?: string, _five?: string): Declensions {
  const two = typeof _two === 'undefined' ? one : _two;
  const five = typeof _five === 'undefined' ? two : _five;
  return [one, two, five];
}

function pluralize(int: PositiveInt, _declensions: Declensions) {
  return _declensions[
    int % 100 > 4 && int % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
  ];
}

export type Plural = (number: ?number) => string;

function plural(one: string, two?: string, five?: string): Plural {
  return (number: ?number) =>
    pluralize(toPositiveInt(number), declensions(one, two, five));
}

export default plural;
