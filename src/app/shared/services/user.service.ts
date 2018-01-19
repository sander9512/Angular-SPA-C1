import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Staff} from '../models/staff.model';

@Injectable()
export class UserService {
  usersChanged = new Subject<User[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/staff'; // URL to web api
  private staff: User[];

  constructor(private http: Http) {
  }

  getStaff(): Promise<User[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.staff = response.json() as User[];
        return this.staff;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  getStaffWithId(id): Promise<User[]> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.staff = response.json() as User[];
        return this.staff;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  createStaffItems(users: User[]): Staff[] {
    const staffItems = new Array<Staff>();
  for (const i of users) {
    console.log(i, i._id);
    const text = i.name;
    const id = i._id;
    const staffItem = new Staff();
    staffItem.text = text;
    staffItem.id = id;
    staffItems.push(staffItem);
  }
  return staffItems;
  }
}
