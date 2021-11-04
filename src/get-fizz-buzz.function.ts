const isInteger = (num: number): boolean => Number.isInteger(num);

const isMultiplesOfNumber =
  (multiples: number) =>
  (num: number): boolean =>
    isInteger(num / multiples);

const isMultiplesOf3 = isMultiplesOfNumber(3);

const isMultiplesOf5 = isMultiplesOfNumber(5);

const getFizzBuzzString = (num: number): string | number => {
  if (isMultiplesOf3(num) && !isMultiplesOf5(num)) return 'Fizz';
  if (!isMultiplesOf3(num) && isMultiplesOf5(num)) return 'Buzz';
  if (isMultiplesOf3(num) && isMultiplesOf5(num)) return 'FizzBuzz';
  return num;
};

export const getFizzBuzzObject = (
  length: number
): { [key: string]: string } => {
  const arrayOfNumbers = Array.from({ length }, (_, i) => i + 1);

  return arrayOfNumbers.reduce(
    (acc, curr) => ({ ...acc, [curr]: getFizzBuzzString(curr) }),
    {}
  );
};
