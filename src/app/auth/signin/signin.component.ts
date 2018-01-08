import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  editMode = false;
  signInForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.editMode != null;
    this.initForm();
  }

  onSignIn() {
    const value = this.signInForm.value;
    const user = {'_email': value.email, '_password': value.password};
    console.log(user);
    this.userService.login(user);
    this.signInForm.reset();

  }

  private initForm() {
    let userEmail = '';
    let userPassword = '';

    this.signInForm = new FormGroup({
      'email': new FormControl(userEmail, Validators.required),
      'password': new FormControl(userPassword, Validators.required)
    });
  }

  }
