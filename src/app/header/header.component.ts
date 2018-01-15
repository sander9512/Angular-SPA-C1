    import { Component, OnChanges } from '@angular/core';
    import {UserService} from '../shared/services/user.service';
    import {User} from '../shared/models/user.model';
    import {Subject} from 'rxjs/Subject';
    import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  user: any;
  subscription: Subscription;

  constructor(private userService: UserService){
    this.user = userService.user;
    this.subscription = userService.userChange.subscribe((value) => {
      this.user = value;
    });
  }

  logOut() {
    this.userService.logout();
    this.user = null;
  }

}
