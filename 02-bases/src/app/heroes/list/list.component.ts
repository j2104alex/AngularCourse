import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public deletedHero?: string = '';

  public heroesName: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();
  }
}
