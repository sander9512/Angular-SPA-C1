import { ClosingDay } from '../models/closingday.model';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';


@Injectable()
export class ClosingDayService {
  closingDayChanged = new Subject<ClosingDay[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/closingday'; // URL to web api
  private closingDays: ClosingDay[];

  constructor(private http: Http) {
  }

  getClosingDays(): Promise<ClosingDay[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.closingDays = response.json() as ClosingDay[];
        return this.closingDays;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  addClosingDay(closingDay: ClosingDay): Promise<ClosingDay> {
    console.log('Sluitingsdag toevoegen');

    return this.http.post(this.serverUrl, closingDay, { headers: this.headers })
      .toPromise()
      .then(response => {
    console.dir(response.json());
    return response.json() as ClosingDay;
    })
    .catch(error => {
      console.log('handleError');
      return Promise.reject(error.message || error);
    });
  }

}
