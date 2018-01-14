import {Http, Headers} from '@angular/http';
import {environment} from '../../../environments/environment';
import {OpeningsTime} from '../models/openingstime.model';
import {Injectable} from '@angular/core';

@Injectable()
export class TimesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/times'; // URL to web api

  constructor(private http: Http) {
  }
  editTime(time: OpeningsTime): Promise<any> {
    console.log('openingstijd wijzigen');

    return this.http.put(this.serverUrl + '/' + time.id, time, { headers: this.headers })
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
