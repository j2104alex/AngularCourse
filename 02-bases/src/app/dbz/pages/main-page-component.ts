import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
})
export class MainPageComponent {
  constructor() {}

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Gokú',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];


  onNewCharacter(character: Character): void {
    //Push final Unshift inicio del arreglo
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
