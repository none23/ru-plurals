import format from './format';

// formatting
const joinDash = (number, word) => `${number}-${word}`;
const joinSpace = (number, word) => `${number} ${word}`;
const skipZero = (number, word) => (number > 0 ? `${number} ${word}` : '-');

describe.each([
  [joinDash, ['рубль', 'рубля', 'рублей'], 0, '0-рублей'],
  [joinSpace, ['метр', 'метра', 'метров'], 1, '1 метр'],
  [skipZero, ['кофе'], 0, '-'],
  [skipZero, ['место', 'места', 'мест'], 55, '55 мест'],
])('format', (formatter, words, number, result) => {
  test('works', () => {
    expect(format(formatter, ...words)(number)).toBe(result);
  });
});
