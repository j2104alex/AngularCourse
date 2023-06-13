import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//id aleatorio
import { v4 as uuid } from 'uuid';


@Injectable(
  { providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Gokú',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];


  addCharacter(character: Character): void {

    const newCharacter: Character = {
      //... tomar todas las propiedades de character y esparcelas por el nuevo
      //objeto que estoy creando
      id: uuid(), ...character
    };
    //Push final Unshift inicio del arreglo
    this.characters.push(newCharacter);
  }

 /*  onDeleteCharacter(id: number): void {
    this.characters.splice(id, 1);
  } */

  deleteCharacterById (id:string){
    this.characters =this.characters.filter(character => character.id !==id);
  }

}
