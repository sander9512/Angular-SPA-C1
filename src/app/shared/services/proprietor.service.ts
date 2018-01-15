import {Subject} from 'rxjs/Subject';
import {Proprietor} from '../models/proprietor.model';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ProprietorService {
  proprietorsChanged = new Subject<Proprietor[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/proprietors'; // URL to web api
  private proprietors: Proprietor[];
  constructor(private http: Http) {}

  getProprietors(): Promise<Proprietor[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.proprietors = response.json() as Proprietor[];
        return this.proprietors;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
}
