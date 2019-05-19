export function plural(
  one: string,
  two?: string,
  five?: string,
): (number?: number) => string;

// N - number parameter (e.g. or ?number)
// R - retyrn type
declare type Formatter = <N, R>(number: N, word: string) => R;

export const format: <N, R>(
  formatter: (number: N, word: string) => R,
  one: string,
  two?: string,
  five?: string,
) => (number?: N) => R;

declare const defaultFormat: (
  one: string,
  two?: string,
  five?: string,
) => (number?: number) => string;

export default defaultFormat;
