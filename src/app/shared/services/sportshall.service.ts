import { SportsHall } from '../models/sportshall.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class SportsHallsService {
  hallsChanged = new Subject<SportsHall[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/halls'; // URL to web api
  private halls: SportsHall[];
  // private sportsHalls: SportsHall[] = [
  //   new SportsHall(
  //       'Sporty Times',
  //       'Breda',
  //       'Hoofdstraat',
  //       '12a',
  //       '0761234567'
  //   ),
  //   new SportsHall(
  //     'Time2Bfit',
  //     'Breda',
  //     'Anderstraat',
  //     '13a',
  //     '0760234567'
  //   ),
  //   new SportsHall(
  //     'RIP fat',
  //     'Tilburg',
  //     'Tilburgsteeg',
  //     '6c',
  //     '0611234567'
  //   )
  // ];

  constructor(private http: Http) {
  }
  // _getSportsHalls() {
  //   return this.sportsHalls.slice();
  // }
  getSportsHalls(): Promise<SportsHall[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.halls = response.json() as SportsHall[];
        return this.halls;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  getSportsHall(id: number): Promise<SportsHall> {
    console.log('id', id);
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json() as SportsHall;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }

  // _getSportsHall(index: number) {
  //   return this.sportsHalls[index];
  // }
}
