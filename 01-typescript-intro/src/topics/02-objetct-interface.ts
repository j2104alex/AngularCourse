//Asignar el tipo de variable y si es un arreglo
let skills: string[] = ["Bash", "Counter", "Healing"];

//Una interfaz sirve para tipar un objeto y que ts sepa como lucen
interface Character {
    name:String;
    hp:number;
    skills:string[];
    //Opcional puede ser tring o indefinido
    hometown?: string
}

//Creacion de objetos
const strider:Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter"]
};

strider.hometown='Rivendell';

console.table(strider)
export {};
