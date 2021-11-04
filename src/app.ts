import inquirer from 'inquirer';

const isInteger = (num: number): boolean => Number.isInteger(num);

const isMultiplesOfNumber =
  (multiples: number) =>
  (num: number): boolean =>
    isInteger(num / multiples);

const isMultiplesOf3 = isMultiplesOfNumber(3);

const isMultiplesOf5 = isMultiplesOfNumber(5);

const getFizzBuzzString = (num: number): string =>
  `${isMultiplesOf3(num) ? 'Fizz' : ''}${isMultiplesOf5(num) ? 'Buzz' : ''}`;

const getFizzBuzzObject = (length: number): { [key: string]: string } => {
  const arrayOfNumbers = Array.from({ length }, (_, i) => i + 1);

  return arrayOfNumbers.reduce(
    (acc, curr) => ({ ...acc, [curr]: getFizzBuzzString(curr) }),
    {}
  );
};

const logFizzBuzz = async (): Promise<void> => {
  const { length } = await inquirer.prompt([
    {
      type: 'number',
      name: 'length',
      message: 'Array length:',
      default: 100,
      validate: (e): boolean => !!e && Number.isInteger(Number(e)),
    },
  ]);

  console.log(JSON.stringify(getFizzBuzzObject(length), null, 4));
};

logFizzBuzz();
