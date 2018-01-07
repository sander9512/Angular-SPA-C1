import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../shared/models/role.model'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedRole = this.roles[1];
    this.editMode != null;
    this.initForm();
  }

  onSignUp() {
    console.log(this.selectedRole);
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
