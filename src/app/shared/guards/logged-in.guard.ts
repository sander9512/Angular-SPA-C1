import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: AuthService) {}

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
