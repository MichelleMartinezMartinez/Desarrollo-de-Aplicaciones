import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'COD: Warzone' },
      { id: 2, name: 'Grand Theft Auto V' },
      { id: 3, name: 'Red Dead Redemption 2' },
      { id: 4, name: 'FIFA 20' },
      { id: 5, name: 'Minecraft: Nintendo Switch Edition' },
      { id: 6, name: 'Mario Kart 8 Deluxe' },
      { id: 7, name: 'Dragon Ball Z: Kakarot' },
      { id: 8, name: 'Just Dance 2020' },
      { id: 9, name: 'The Legend of Zelda: Breath of the Wild' },
      { id: 10, name: 'Super Mario Odyssey' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}