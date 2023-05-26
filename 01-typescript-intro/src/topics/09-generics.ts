
//El primer generico es con la letra T entre <>
export function whatsMyType<T>(argument:T):T {
  return argument;
}

//Si establezco el tipo de dato en esta sección prima sobre la de la funcion
let amIString =whatsMyType<string>('Hola mundo');
let amINumber =whatsMyType<number>(100);
let amIArray =whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));