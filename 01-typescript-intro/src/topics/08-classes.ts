export class Person {
  //las funciones dentro de las clases se conocen como metodos
  constructor(
    public name: string, 
    private address: string = "No address"
    ) {}
}

//INYECCION DE DEPENDENCIAS
//Extender una clase: Hereda todo lo de la otra clase
export class Hero extends Person {
    
    constructor(
        public alterEgo: string,
        public age:number,
        public realName:string
        ){
        
        //super indica que se debe llamar el constructor del padre Person
        //Debo mandar name y address
        super(realName,'New York'); //Es el constructor del padre
    }
}
//cuando hay parentesis se invoca una clase o funcion
const ironman = new Hero("Ironman", 45,'Tonny');

console.log(ironman);
