import { getFizzBuzzObject } from './get-fizz-buzz.function';

describe('getFizzBuzzObject', () => {
  it('should return correct object', () => {
    expect(getFizzBuzzObject(15)).toEqual({
      '1': '',
      '2': '',
      '3': 'Fizz',
      '4': '',
      '5': 'Buzz',
      '6': 'Fizz',
      '7': '',
      '8': '',
      '9': 'Fizz',
      '10': 'Buzz',
      '11': '',
      '12': 'Fizz',
      '13': '',
      '14': '',
      '15': 'FizzBuzz',
    });
  });
});
