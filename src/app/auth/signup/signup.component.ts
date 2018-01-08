import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../shared/models/role.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  editMode = false;
  signUpForm: FormGroup;
  roles = [
    new Role(1, 'Personeel'),
    new Role(2, 'Verhuurder')
  ];
  selectedRole: Role;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.selectedRole = this.roles[1];
    this.editMode != null;
    this.initForm();
  }

  onSignUp() {
    const value = this.signUpForm.value;
    const user = new User({'_email': value.email, '_password': value.password, '_role': this.selectedRole.name});
    console.log(user);
    this.userService.register(user);
    this.signUpForm.reset();
  }

  onChangeRole(role) {
    this.selectedRole = role;
  }

  private initForm() {
    let userEmail = '';
    let userPassword = '';
    let userRole = '';

    this.signUpForm = new FormGroup({
      'email': new FormControl(userEmail, Validators.required),
      'password': new FormControl(userPassword, Validators.required),
      'role': new FormControl(userRole)
    });
  }

}
