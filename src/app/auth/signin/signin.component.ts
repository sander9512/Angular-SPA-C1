import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  editMode = false;
  signInForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.editMode != null;
    this.initForm();
  }

  onSignIn() {

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
