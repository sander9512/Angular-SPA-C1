import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class OnlyStaffGuard implements CanActivate {

  user: any;
  subscription: Subscription;

  constructor(private userService: AuthService){
    this.user = userService.user;
    this.subscription = userService.userChange.subscribe((value) => {
      this.user = value;
    });
  }

  canActivate() {
    console.log('OnlyStaff');

    if (this.user.role === 'Personeel') {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
