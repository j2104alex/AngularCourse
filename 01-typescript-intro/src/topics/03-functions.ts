//Cuando retorna void es que no retorna nada-no hay return
function addNumber(a: number, b: number) {
  return a + b;
}

//Funcion flecha
const addNumbersArrow = (a: number, b: number) => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const result: number = addNumber(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

//Para imprimmir objetos con las llaves
console.log({ result, result2,multiplyResult });

export {};
