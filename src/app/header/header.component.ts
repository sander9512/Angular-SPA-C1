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

  userEmail: String;
  subscription: Subscription;

  constructor(private userService: UserService){
    this.userEmail = userService.email;
    this.subscription = userService.emailChange.subscribe((value) => {
      this.userEmail = value;
    });
  }

  logOut() {
    this.userService.logout();
    this.userEmail = null;
  }

}
