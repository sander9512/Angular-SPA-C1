import { Maintenance } from '../models/maintenance.model';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';


@Injectable()
export class MaintenanceService {
  maintenanceChanged = new Subject<Maintenance[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/maintenance'; // URL to web api
  private maintenances: Maintenance[];

  constructor(private http: Http) {
  }

  getMaintenances(): Promise<Maintenance[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.maintenances = response.json() as Maintenance[];
        return this.maintenances;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  addMaintenance(maintenance: Maintenance): Promise<any> {
    console.log('Onderhoud toevoegen');

    return this.http.post(this.serverUrl, maintenance, { headers: this.headers })
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

}
