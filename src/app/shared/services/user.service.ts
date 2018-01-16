import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl;
  private token;
  user: User;
  private proprietor: {id: number, name: string};
  User: any;
  userChange: Subject<User> = new Subject<User>();


  constructor(private http: Http, private router: Router) { }


  public register(user: User): Promise<string> {
    return this.http.post(this.serverUrl + '/register', user, {headers: this.headers})
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
  public login(user: any): Promise<User> {
    return this.http.post(this.serverUrl + '/login', user, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json);
        const res = JSON.parse(response.text());
        this.token = res['token'];
        const authUser = res['user'];
        console.log(this.token);
        console.log(authUser);
        this.user = authUser;
        this.router.navigate(['/']);
        this.user = this.user;
        this.userChange.next(this.user);
        return authUser as User;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }
  public logout() {
    this.token = null;
    this.user = null;
  }
  public getToken() {
      return this.token;
  }
  public getUser() {
    return this.user;
  }
  public isAuthenticated() {
    return this.token != null;
  }

  public isLoggedIn() {
    if (this.token != null) {
      return true;
    } else {
      return false;
    }
  }
}
