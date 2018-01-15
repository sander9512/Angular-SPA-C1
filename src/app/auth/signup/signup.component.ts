import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../shared/models/role.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {ProprietorService} from '../../shared/services/proprietor.service';
import {Proprietor} from '../../shared/models/proprietor.model';
import {Subscription} from 'rxjs/Subscription';

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
  proprietors: Proprietor[];
  subscription: Subscription;
  prop: Proprietor;
  selectedAccount: Proprietor;

  constructor(private route: ActivatedRoute, private userService: UserService, private propService: ProprietorService) { }

  ngOnInit() {
    this.selectedRole = this.roles[1];
    this.editMode != null;
    this.initForm();
    this.subscription = this.propService.proprietorsChanged
      .subscribe(
        (props: Proprietor[]) => {
          this.proprietors = props;
        }
      );
    this.propService.getProprietors()
      .then(props => {
        this.proprietors = props;
      })
      .catch(error => console.log(error));
  }

  onSignUp() {
    const value = this.signUpForm.value;
    console.log('account', value.account);
    const user = new User({'_email': value.email, '_password': value.password, '_role': this.selectedRole.name});
    if (user.role === 'Verhuurder') {
      user.propID = this.selectedAccount.id;
    }
    console.log(user);
    this.userService.register(user);
    this.signUpForm.reset();
  }

  onChangeRole(role) {
    this.selectedRole = role;
  }
  onChangeAccount(account) {
  this.selectedAccount = account;
  console.log('selectedacc', this.selectedAccount);
  }

  private initForm() {
    const userEmail = '';
    const userPassword = '';
    const userRole = '';

    this.signUpForm = new FormGroup({
      'email': new FormControl(userEmail, Validators.required),
      'password': new FormControl(userPassword, Validators.required),
      'role': new FormControl(userRole)
    });
  }

}
