export class Person {
  //las funciones dentro de las clases se conocen como metodos
  constructor(
    public firstName: string, 
    public lastName:string,
    private address: string = "No address"
    ) {}
}

//INYECCION DE DEPENDENCIAS
//Extender una clase: Hereda todo lo de la otra clase
/* export class Hero extends Person {
    
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

console.log(ironman); */

//Priorizar composición sobre herencia
export class Hero {
    //Así seria si se crea la instancia de persona dentro del constructor
    /* public person:Person; */

    constructor(
        public alterEgo: string,
        public age:number,
        public realName:string,
        public person:Person,
        ){
            //si la clase persona cambia se ve afectada la clase Hero
            //cuando esta dentro del constructor
            /* this.person = new Person(realName); */
        }
}

const tony = new Person ('Tony','Stark','New York');
const ironman = new Hero ('Ironman',45,'Tony',tony);

console.log(ironman);