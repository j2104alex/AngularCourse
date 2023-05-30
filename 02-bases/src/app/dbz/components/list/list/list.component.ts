import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //@ Input
  //Dice que ListComponent puede recibir una property characterList

  @Input()
  public characterList:Character[]=[];

  //@ Output
  //Dice que se emite el  evento onDelete y la logica esta en main.ts que recibe un numero (index) como
  //parametro

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  //variable que instancia la clase de EventEmmiter


  public onDeleteCharacter(index:number):void{
    //Emitir el ID del personaje
    this.onDelete.emit(index)
  }
}
