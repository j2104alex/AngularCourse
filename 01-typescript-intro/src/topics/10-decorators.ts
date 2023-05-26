//Los decoradores son funciones que se pueden adjuntar en las clases
//Se usa con el @
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "Override";
  }
}

@classDecorator
export class SuperClass {
  public myProperty: string = "Abc123";

  print() {
    console.log("Hola mundo");
  }
}
//Imprime la definicion de la clase
console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
