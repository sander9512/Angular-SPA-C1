import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WorkDay} from '../models/workday.model';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import {WorkdaySchedule} from "../models/workday-schedule.model";

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
  addWorkday(workday: WorkDay): Promise<any> {
    console.log('workday toevoegen');

    return this.http.post(this.serverUrl, workday, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as any;
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

  getWorkDaysWithHallId(id): Promise<WorkDay[]> {
    return this.http.get(this.serverUrl + '/hall/' + id, {headers: this.headers})
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
  deleteWorkday(id): Promise<any> {
    return this.http.delete(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json();
      })
      .catch(error => {
        console.log('error');
        return Promise.reject(error.message || error);
      });
  }
 createWorkDayScheduleItems(workdays: WorkDay[]): WorkdaySchedule[] {
    const WorkdaySchedules = new Array<WorkdaySchedule>();
    for (const i of workdays) {
      const workDaySchedule = new WorkdaySchedule(i.text, i.userId, i.startTime, i.endTime);
      workDaySchedule._id = i._id;
      console.log(workDaySchedule);
      WorkdaySchedules.push(workDaySchedule);
    }
    return WorkdaySchedules;
 }
}
