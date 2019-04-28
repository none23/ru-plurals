/* eslint-disable sonarjs/no-duplicate-string */
import plural from './plural';

// nouns
const ruble = plural('рубль', 'рубля', 'рублей');
const meter = plural('метр', 'метра', 'метров');
const seat = plural('место', 'места', 'мест');
const purchase = plural('покупка', 'покупки', 'покупок');

describe.each([
  [ruble, 0, 'рублей'],
  [ruble, 1, 'рубль'],
  [ruble, 2, 'рубля'],
  [ruble, 5, 'рублей'],
  [ruble, 50, 'рублей'],
  [ruble, 101, 'рубль'],
  [ruble, 234, 'рубля'],
  [ruble, 980, 'рублей'],
  [ruble, 4000, 'рублей'],
  [ruble, 5561, 'рубль'],
  [meter, 0, 'метров'],
  [meter, 1, 'метр'],
  [meter, 2, 'метра'],
  [meter, 5, 'метров'],
  [meter, 50, 'метров'],
  [meter, 101, 'метр'],
  [meter, 234, 'метра'],
  [meter, 980, 'метров'],
  [meter, 4000, 'метров'],
  [meter, 5561, 'метр'],
  [seat, 0, 'мест'],
  [seat, 1, 'место'],
  [seat, 2, 'места'],
  [seat, 5, 'мест'],
  [seat, 50, 'мест'],
  [seat, 101, 'место'],
  [seat, 234, 'места'],
  [seat, 980, 'мест'],
  [seat, 4000, 'мест'],
  [seat, 5561, 'место'],
  [purchase, 0, 'покупок'],
  [purchase, 1, 'покупка'],
  [purchase, 2, 'покупки'],
  [purchase, 5, 'покупок'],
  [purchase, 50, 'покупок'],
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

// verbs/adjectives
const work = plural('работает', 'работают');
const matching = plural('подходящий', 'подходящиx');
const selected = plural('выбранной', 'выбранных');

describe.each([
  [work, 0, 'работают'],
  [work, 1, 'работает'],
  [work, 2, 'работают'],
  [work, 5, 'работают'],
  [work, 50, 'работают'],
  [work, 101, 'работает'],
  [work, 234, 'работают'],
  [work, 980, 'работают'],
  [work, 4000, 'работают'],
  [work, 5561, 'работает'],
  [matching, 0, 'подходящиx'],
  [matching, 1, 'подходящий'],
  [matching, 2, 'подходящиx'],
  [matching, 5, 'подходящиx'],
  [matching, 50, 'подходящиx'],
  [matching, 101, 'подходящий'],
  [matching, 234, 'подходящиx'],
  [matching, 980, 'подходящиx'],
  [matching, 4000, 'подходящиx'],
  [matching, 5561, 'подходящий'],
  [selected, 0, 'выбранных'],
  [selected, 1, 'выбранной'],
  [selected, 2, 'выбранных'],
  [selected, 5, 'выбранных'],
  [selected, 50, 'выбранных'],
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

// single word
const coffee = plural('кофе');

describe.each([
  [coffee, 0, 'кофе'],
  [coffee, 1, 'кофе'],
  [coffee, 2, 'кофе'],
  [coffee, 5, 'кофе'],
  [coffee, 50, 'кофе'],
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
