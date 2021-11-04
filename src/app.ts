import inquirer from 'inquirer';
import { getFizzBuzzObject } from './get-fizz-buzz.function';

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
