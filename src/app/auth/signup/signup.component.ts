import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../shared/models/role.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {ProprietorService} from '../../shared/services/proprietor.service';
import {Proprietor} from '../../shared/models/proprietor.model';
import {Subscription} from 'rxjs/Subscription';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {SportsHall} from '../../shared/models/sportshall.model';

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
  selectedHall: SportsHall;
  halls: SportsHall[];

  constructor(private route: ActivatedRoute, private userService: UserService,
              private propService: ProprietorService, private hallService: SportsHallsService) { }

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
    this.hallService.getSportsHalls()
      .then(halls => {
        this.halls = halls;
      })
      .catch(error => console.log(error));
  }

  onSignUp() {
    const value = this.signUpForm.value;
    console.log('account', value.account);
    const user = new User({'_email': value.email, '_password': value.password, '_role': this.selectedRole.name});
    if (user.role === 'Verhuurder') {
      user.propID = this.selectedAccount.id;
      user.name = this.selectedAccount.name;
    } else if (user.role === 'Personeel') {
      user.name = value.name;
      user.hallID = this.selectedHall.id;
    }
    console.log(user);
    this.userService.register(user);
    this.signUpForm.reset();
  }

  onChangeRole(role) {
    this.selectedRole = role;
  }
  onChangeHall(hall) {
    this.selectedHall = hall;
    console.log(this.selectedHall);
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
      'role': new FormControl(userRole),
      'name': new FormControl()
    });
  }

}
