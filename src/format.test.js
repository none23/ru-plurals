/* eslint-disable sonarjs/no-duplicate-string */
import plural from './plural';
import format from './format';

// nouns
const ruble = plural('рубль', 'рубля', 'рублей');
const meter = plural('метр', 'метра', 'метров');
const seat = plural('место', 'места', 'мест');
const coffee = plural('кофе');

// formatting
const joinDash = (number, word) => `${number}-${word}`;
const joinSpace = (number, word) => `${number} ${word}`;
const skipZero = (number, word) => (number > 0 ? `${number} ${word}` : '-');

describe.each([
  [joinDash, ruble, 0, '0-рублей'],
  [joinSpace, meter, 1, '1 метр'],
  [skipZero, coffee, 0, '-'],
  [skipZero, seat, 5, '5 мест'],
])('formatPlural', (formatter, wordPlural, number, result) => {
  test('works', () => {
    expect(format(formatter)(wordPlural)(number)).toBe(result);
  });
});
/* eslint-enable sonarjs/no-duplicate-string */
