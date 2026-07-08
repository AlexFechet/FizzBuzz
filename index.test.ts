import { fizzbuzz } from './index';

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz("3", ["--3", "--5", "-- 17"])).toBe('Fizz');
});