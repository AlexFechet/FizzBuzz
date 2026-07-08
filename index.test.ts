import { fizzbuzz } from './index';

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz("3", ["--3", "--5", "-- 17"])).toBe('Fizz');
});

test('fizzbuzz returns "Fizz" for 255', () => {
    expect(fizzbuzz("255", ["--3", "--5", "-- 17"])).toBe('FizzBuzz');
});

test('fizzbuzz returns "Fizz" for 255 without flags', () => {
    expect(fizzbuzz("255", [""])).toBe('255');
});

test('fizzbuzz returns "Fizz" for 195', () => {
    expect(fizzbuzz("195", ["--3", "--5", "-- 17", "-13"])).toBe('FizzBuzz');
});

test('fizzbuzz returns "Fizz" for 105', () => {
    expect(fizzbuzz("105", ["--3", "--5", "-- 17", "-13", "--7"])).toBe('FizzBuzzBang');
});

test('fizzbuzz returns "Fizz" for 121', () => {
    expect(fizzbuzz("121", ["--3", "--5", "-- 17", "-13", "--7", "--11"])).toBe('Bong');
});