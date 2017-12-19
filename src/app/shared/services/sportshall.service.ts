import { SportsHall } from '../models/sportshall.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SportsHallsService{
  private sportsHalls: SportsHall[] = [
    new SportsHall(
        'Sporty Times',
        'Breda',
        'Hoofdstraat',
        '12a',
        '0761234567'
    ),
    new SportsHall(
      'Time2Bfit',
      'Breda',
      'Anderstraat',
      '13a',
      '0760234567'
    ),
    new SportsHall(
      'RIP fat',
      'Tilburg',
      'Tilburgsteeg',
      '6c',
      '0611234567'
    )
  ];

  getSportsHalls() {
    return this.sportsHalls.slice();
  }

  getSportsHall(index: number) {
    return this.sportsHalls[index];
  }
}
