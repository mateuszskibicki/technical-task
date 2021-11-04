import inquirer from 'inquirer';
import { getFizzBuzzObject } from './get-fizz-buzz.function';

enum Syntax {
  Object = 'OBJECT',
  Array = 'ARRAY',
  ForLoop = 'FOR_LOOP',
}

const logFizzBuzz = async (): Promise<void> => {
  const { length, syntax } = await inquirer.prompt([
    {
      type: 'number',
      name: 'length',
      message: 'Array length:',
      default: 100,
      validate: (e): boolean => !!e && Number.isInteger(Number(e)),
    },
    {
      type: 'list',
      name: 'syntax',
      message: 'Syntax:',
      choices: Object.values(Syntax),
    },
  ]);

  if (syntax === Syntax.Object)
    console.log(JSON.stringify(getFizzBuzzObject(length), null, 4));
  if (syntax === Syntax.Array)
    console.log(Object.entries(getFizzBuzzObject(length)));
  if (syntax === Syntax.ForLoop)
    for (const value of Object.values(getFizzBuzzObject(length)))
      console.log(value);
};

logFizzBuzz();
