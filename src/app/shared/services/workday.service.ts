import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WorkDay} from '../models/workday.model';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';

@Injectable()
export class WorkdayService {
  workdayChanged = new Subject<WorkDay[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/workdays'; // URL to web api
  private workdays: WorkDay[];
  private fakeWorkDays = new Array<WorkDay>();

  constructor(private http: Http) {
  }

  getWorkDays(): Promise<WorkDay[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.workdays = response.json() as WorkDay[];
        return this.workdays;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  getWorkDaysWithUserId(id): Promise<WorkDay[]> {
    return this.http.get(this.serverUrl + '/user/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.workdays = response.json() as WorkDay[];
        return this.workdays;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  getFakeWorkDays(): WorkDay[] {
    return this.fakeWorkDays;
  }
  addFakeWorkDay(workday: WorkDay) {
    this.fakeWorkDays.push(workday);
    console.log(this.fakeWorkDays, 'length', this.fakeWorkDays.length);
  }
}
