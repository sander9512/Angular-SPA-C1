import { Component, Input, OnInit } from '@angular/core';
import {SportsHall} from './../shared/models/sportshall.model';
import {SportsHallsService} from './../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {OpeningsTime} from '../shared/models/openingstime.model';
import {TimesService} from '../shared/services/times.service';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.css']
})
export class EditTimesComponent implements OnInit {
  hall: SportsHall;
  id: number;
  timesFormMonday: FormGroup;
  timesFormTuesday: FormGroup;
  timesFormWednesday: FormGroup;
  timesFormThursday: FormGroup;
  timesFormFriday: FormGroup;
  times: OpeningsTime[] = new Array<OpeningsTime>();
  subscription: Subscription;


  constructor(private hallService: SportsHallsService, private route: ActivatedRoute, private timesService: TimesService) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this.hallService.getSportsHall(this.id)
          .then(hall => {
            this.hall = hall;
            this.times = this.hall.times;
            console.log(this.times);
            this.fillForm();
            console.log(hall);
          })
          .catch(error => console.log(error));
      });
      this.initForm();

  }

  initForm() {
    console.log('times', this.times);

    this.timesFormMonday = new FormGroup({
      // Regex werkt niet
      'startTimeMonday': new FormControl(),
      'closingTimeMonday': new FormControl(),
      'mondayId': new FormControl(),
       });
    this.timesFormTuesday = new FormGroup({
      'startTimeTuesday': new FormControl(),
      'closingTimeTuesday': new FormControl(),
      'tuesdayId': new FormControl(),
    });
    this.timesFormWednesday = new FormGroup({
      'startTimeWednesday': new FormControl(),
      'closingTimeWednesday': new FormControl(),
      'wednesdayId': new FormControl(),
    });
    this.timesFormThursday = new FormGroup({
      'startTimeThursday': new FormControl(),
      'closingTimeThursday': new FormControl(),
      'thursdayId': new FormControl(),
    });
    this.timesFormFriday = new FormGroup({
      'startTimeFriday': new FormControl(),
      'closingTimeFriday': new FormControl(),
      'fridayId': new FormControl(),
    });
  }

  fillForm() {
    for (let i of this.times) {
      if (i.day === 'Maandag') {
        console.log('maandag');
        this.timesFormMonday.get('startTimeMonday').setValue(i.timeOpen);
        this.timesFormMonday.get('closingTimeMonday').setValue(i.timeClose);
        this.timesFormMonday.get('mondayId').setValue(i.id);
      }
      if (i.day === 'Dinsdag') {
        console.log('Dinsdag');
        this.timesFormTuesday.get('startTimeTuesday').setValue(i.timeOpen);
        this.timesFormTuesday.get('closingTimeTuesday').setValue(i.timeClose);
        this.timesFormTuesday.get('tuesdayId').setValue(i.id);
      }
      if (i.day === 'Woensdag') {
        console.log('woensdag');
        this.timesFormWednesday.get('startTimeWednesday').setValue(i.timeOpen);
        this.timesFormWednesday.get('closingTimeWednesday').setValue(i.timeClose);
        this.timesFormWednesday.get('wednesdayId').setValue(i.id);
      }
      if (i.day === 'Donderdag') {
        console.log('donderdag');
        this.timesFormThursday.get('startTimeThursday').setValue(i.timeOpen);
        this.timesFormThursday.get('closingTimeThursday').setValue(i.timeClose);
        this.timesFormThursday.get('thursdayId').setValue(i.id);
      }
      if (i.day === 'Vrijdag') {
        console.log('vrijdag');
        this.timesFormFriday.get('startTimeFriday').setValue(i.timeOpen);
        this.timesFormFriday.get('closingTimeFriday').setValue(i.timeClose);
        this.timesFormFriday.get('fridayId').setValue(i.id);
      }
      console.log('form filled');
    }
  }

  onSaveMonday() {
    console.log(this.timesFormMonday);
    const value = this.timesFormMonday.value;
    const time = new OpeningsTime({'_id': value.mondayId, '_timeOpen': value.startTimeMonday, '_timeClose': value.closingTimeMonday});
    this.timesService.editTime(time);
    console.log(time);
  }

  onSaveTuesday() {
    console.log(this.timesFormTuesday);
    const value = this.timesFormTuesday.value;
    const time = new OpeningsTime({'_id': value.tuesdayId, '_timeOpen': value.startTimeTuesday, '_timeClose': value.closingTimeTuesday});
    this.timesService.editTime(time);
    console.log(time);
  }

  onSaveWednesday() {
    console.log(this.timesFormWednesday);
    const value = this.timesFormWednesday.value;
    const time = new OpeningsTime({'_id': value.wednesdayId, '_timeOpen': value.startTimeWednesday,
      '_timeClose': value.closingTimeWednesday});
    this.timesService.editTime(time);
    console.log(time);
  }

  onSaveThursday() {
    console.log(this.timesFormThursday);
    const value = this.timesFormThursday.value;
    const time = new OpeningsTime({'_id': value.thursdayId, '_timeOpen': value.startTimeThursday, '_timeClose': value.closingTimeThursday});
    this.timesService.editTime(time);
    console.log(time);
  }

  onSaveFriday() {
    console.log(this.timesFormFriday);
    const value = this.timesFormFriday.value;
    const time = new OpeningsTime({'_id': value.fridayId, '_timeOpen': value.startTimeFriday, '_timeClose': value.closingTimeFriday});
    this.timesService.editTime(time);
    console.log(time);
  }
}
