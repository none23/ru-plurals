// @flow strict

import plural from './plural';

// N - number parameter (e.g. or ?number)
// R - retyrn type
export type Formatter = <N, R>(number: N, word: string) => R;

function format(
  formatter: Formatter,
  one: string,
  two?: string,
  five?: string,
) {
  return (number: ?number) => formatter(number, plural(one, two, five)(number));
}

export default format;
