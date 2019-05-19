# ru-plurals

[![npm version](http://img.shields.io/npm/v/ru-plurals.svg?style=flat)](https://npmjs.org/package/ru-plurals "View this project on npm")
[![flow coverage](https://img.shields.io/badge/flow%20coverage-99%25-brightgreen.svg)](https://flow.org)
[![jest coverage](https://img.shields.io/badge/jest%20coverage-92%25-brightgreen.svg)](https://jestjs.io)

Simple functional pluralization of Russian, Belarusian, and Ukrainian words.

## Install
```bash
npm install --save ru-plurals
# or
yarn add ru-plurals
```

## Usage
#### default format
```ts
import plural from 'ru-plurals';

const ruble = plural('рубль', 'рубля', 'рублей');
const work = plural('работает', 'работают'); // same as plural('работает', 'работают', 'работают');
const coffee = plural('кофе'); // same as plural('кофе', 'кофе', 'кофе')

ruble(101) // => '101 рубль'
ruble(500) // => '500 рублей'
coffee(2) // => '2 кофе'
```
#### custom format
```ts
import { format } from 'ru-plurals';

const ruble = plural('рубль', 'рубля', 'рублей');
const work = plural('работает', 'работают'); // same as plural('работает', 'работают', 'работают');
const coffee = plural('кофе'); // same as plural('кофе', 'кофе', 'кофе')

const meters = format((count, word) => `${count} {word}`, 'метр', 'метра', 'метров');

meters(1) // => '1 метр'
meters(200) // => '200 метров'

// JSX
const distance = format((count, word) => <>{count}&nbsp;<em>{word}</em></>, 'метр', 'метра', 'метров');

distance(10) // => <>10&nbsp;<em>метров</em></>
```
