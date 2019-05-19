import { defaultFormat, plural, format } from '.';

/* eslint-disable sonarjs/no-duplicate-string */

// nouns
const ruble = plural('рубль', 'рубля', 'рублей');
const seat = plural('место', 'места', 'мест');
const purchase = plural('покупка', 'покупки', 'покупок');

// verbs/adjectives
const work = plural('работает', 'работают');
const matching = plural('подходящий', 'подходящиx');
const selected = plural('выбранной', 'выбранных');

// single word
const coffee = plural('кофе');

describe.each([
  [ruble, 0, 'рублей'],
  [ruble, 1, 'рубль'],
  [ruble, 2, 'рубля'],
  [ruble, 5, 'рублей'],
  [ruble, 11, 'рублей'],
  [ruble, 12, 'рублей'],
  [ruble, 13, 'рублей'],
  [ruble, 101, 'рубль'],
  [ruble, 234, 'рубля'],
  [ruble, 980, 'рублей'],
  [ruble, 4000, 'рублей'],
  [ruble, 5561, 'рубль'],
  [seat, 0, 'мест'],
  [seat, 1, 'место'],
  [seat, 2, 'места'],
  [seat, 5, 'мест'],
  [seat, 11, 'мест'],
  [seat, 12, 'мест'],
  [seat, 13, 'мест'],
  [seat, 101, 'место'],
  [seat, 234, 'места'],
  [seat, 980, 'мест'],
  [seat, 4000, 'мест'],
  [seat, 5561, 'место'],
  [purchase, 0, 'покупок'],
  [purchase, 1, 'покупка'],
  [purchase, 2, 'покупки'],
  [purchase, 5, 'покупок'],
  [purchase, 11, 'покупок'],
  [purchase, 12, 'покупок'],
  [purchase, 13, 'покупок'],
  [purchase, 101, 'покупка'],
  [purchase, 234, 'покупки'],
  [purchase, 980, 'покупок'],
  [purchase, 4000, 'покупок'],
  [purchase, 5561, 'покупка'],
])('plural with nouns', (nounPlural, number, result) => {
  test(`(${number}) -> ${result}`, () => {
    expect(nounPlural(number)).toBe(result);
  });
  test(`("${number}") -> ${result}`, () => {
    expect(nounPlural(number)).toBe(result);
  });
});

describe.each([
  [work, 0, 'работают'],
  [work, 1, 'работает'],
  [work, 2, 'работают'],
  [work, 5, 'работают'],
  [work, 11, 'работают'],
  [work, 12, 'работают'],
  [work, 13, 'работают'],
  [work, 101, 'работает'],
  [work, 234, 'работают'],
  [work, 980, 'работают'],
  [work, 4000, 'работают'],
  [work, 5561, 'работает'],
  [matching, 0, 'подходящиx'],
  [matching, 1, 'подходящий'],
  [matching, 2, 'подходящиx'],
  [matching, 5, 'подходящиx'],
  [matching, 11, 'подходящиx'],
  [matching, 12, 'подходящиx'],
  [matching, 13, 'подходящиx'],
  [matching, 101, 'подходящий'],
  [matching, 234, 'подходящиx'],
  [matching, 980, 'подходящиx'],
  [matching, 4000, 'подходящиx'],
  [matching, 5561, 'подходящий'],
  [selected, 0, 'выбранных'],
  [selected, 1, 'выбранной'],
  [selected, 2, 'выбранных'],
  [selected, 5, 'выбранных'],
  [selected, 11, 'выбранных'],
  [selected, 12, 'выбранных'],
  [selected, 13, 'выбранных'],
  [selected, 101, 'выбранной'],
  [selected, 234, 'выбранных'],
  [selected, 980, 'выбранных'],
  [selected, 4000, 'выбранных'],
  [selected, 5561, 'выбранной'],
])('plural with verbs and adjectives', (verbPlural, number, result) => {
  test(`(${number}) -> ${result}`, () => {
    expect(verbPlural(number)).toBe(result);
  });
  test(`("${number}") -> ${result}`, () => {
    expect(verbPlural(number)).toBe(result);
  });
});

describe.each([
  [coffee, 0, 'кофе'],
  [coffee, 1, 'кофе'],
  [coffee, 2, 'кофе'],
  [coffee, 5, 'кофе'],
  [coffee, 11, 'кофе'],
  [coffee, 12, 'кофе'],
  [coffee, 13, 'кофе'],
  [coffee, 101, 'кофе'],
  [coffee, 234, 'кофе'],
  [coffee, 980, 'кофе'],
  [coffee, 4000, 'кофе'],
  [coffee, 5561, 'кофе'],
])('plural with single word', (wordPlural, number, result) => {
  test(`(${number}) -> ${result}`, () => {
    expect(wordPlural(number)).toBe(result);
  });
  test(`("${number}") -> ${result}`, () => {
    expect(wordPlural(number)).toBe(result);
  });
});

describe.each(
  ['a', 'foo', {}, [], new Map(), new Date(), new Promise(() => 1)],
  'plural throws when the number is invalid',
  invalidArg => {
    test(`(${String(invalidArg)}) throws`, () => {
      expect(coffee(invalidArg)).toThrow();
    });
  },
);

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

describe.each([
  [['рубль', 'рубля', 'рублей'], 0, '0 рублей'],
  [['метр', 'метра', 'метров'], 1, '1 метр'],
  [['кофе'], 0, '0 кофе'],
  [['место', 'места', 'мест'], 55, '55 мест'],
])('formatDefault', (words, number, result) => {
  test('works', () => {
    expect(defaultFormat(...words)(number)).toBe(result);
  });
});
