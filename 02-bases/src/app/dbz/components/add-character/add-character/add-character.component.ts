import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  //Los componentes propios de dbz no necesitan la palabra app
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  /* Crear instancia de emision de ventos ya que debemos pasar la data
  de este componente al componente de listar */
  @Output()
  public onNewCharacterAdded: EventEmitter<Character> = new EventEmitter();

  public characterAdded: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.characterAdded);

    if (this.characterAdded.name.length === 0) return;

    this.onNewCharacterAdded.emit(this.characterAdded);

    this.characterAdded = {name : '', power : 0};
  }
}
