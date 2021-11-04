const isInteger = (num: number): boolean => Number.isInteger(num);

const isMultiplesOfNumber =
  (multiples: number) =>
  (num: number): boolean =>
    isInteger(num / multiples);

const isMultiplesOf3 = isMultiplesOfNumber(3);

const isMultiplesOf5 = isMultiplesOfNumber(5);

const getFizzBuzzString = (num: number): string =>
  `${isMultiplesOf3(num) ? 'Fizz' : ''}${isMultiplesOf5(num) ? 'Buzz' : ''}`;

export const getFizzBuzzObject = (
  length: number
): { [key: string]: string } => {
  const arrayOfNumbers = Array.from({ length }, (_, i) => i + 1);

  return arrayOfNumbers.reduce(
    (acc, curr) => ({ ...acc, [curr]: getFizzBuzzString(curr) }),
    {}
  );
};
