import { Component, Input, OnInit } from '@angular/core';
import {SportsHall} from './../shared/models/sportshall.model';
import {SportsHallsService} from './../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {OpeningsTime} from '../shared/models/openingstime.model';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.css']
})
export class EditTimesComponent implements OnInit {
  hall: SportsHall;
  id: number;
  timesForm: FormGroup;
  times: OpeningsTime[] = new Array<OpeningsTime>();
  subscription: Subscription;


  constructor(private hallService: SportsHallsService, private route: ActivatedRoute) {

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

    this.timesForm = new FormGroup({
      // Regex werkt niet
      'startTimeMonday': new FormControl(Validators.pattern('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')),
      'closingTimeMonday': new FormControl(),

      // 'startTimeTuesday': new FormControl(),
      // 'closingTimeTuesday': new FormControl(),
      //
      // 'startTimeWednesday': new FormControl(),
      // 'closingTimeWednesday': new FormControl(),
      //
      // 'startTimeThursday': new FormControl(),
      // 'closingTimeThursday': new FormControl(),
      //
      // 'startTimeFriday': new FormControl(),
      // 'closingTimeFriday': new FormControl(),
    });

  }

  fillForm() {
    for (let i of this.times) {
      if (i.day === 'Maandag') {
        console.log('maandag');
        this.timesForm.get('startTimeMonday').setValue(i.timeOpen);
        this.timesForm.get('closingTimeMonday').setValue(i.timeClose);
      }
      if (i.day === 'Dinsdag') {
        console.log('Dinsdag');
        this.timesForm.get('startTimeTuesday').setValue(i.timeOpen);
        this.timesForm.get('closingTimeTuesday').setValue(i.timeClose);
      }
      if (i.day === 'Woensdag') {
        console.log('woensdag');
        this.timesForm.get('startTimeWednesday').setValue(i.timeOpen);
        this.timesForm.get('closingTimeWednesday').setValue(i.timeClose);
      }
      if (i.day === 'Donderdag') {
        console.log('donderdag');
        this.timesForm.get('startTimeThursday').setValue(i.timeOpen);
        this.timesForm.get('closingTimeThursday').setValue(i.timeClose);
      }
      if (i.day === 'Vrijdag') {
        console.log('vrijdag');
        this.timesForm.get('startTimeFriday').setValue(i.timeOpen);
        this.timesForm.get('closingTimeFriday').setValue(i.timeClose);
      }
      console.log('form filled');
    }
  }

  onSubmit(){
    console.log(this.timesForm);
  }

}
