// @flow strict

type Plural = (number: ?number) => string;

// N - number parameter (e.g. or ?number)
// R - retyrn type
export type Formatter = <N, R>(number: N, word: string) => R;

function format(formatter: Formatter) {
  return (_plural: Plural) => (number: ?number) =>
    formatter(number, _plural(number));
}

export default format;
