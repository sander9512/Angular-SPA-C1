import { Component, Input, OnInit } from '@angular/core';
import {SportsHall} from './../shared/models/sportshall.model';
import {SportsHallsService} from './../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.css']
})
export class EditTimesComponent implements OnInit {
  hall: SportsHall;
  id: number;
  timesForm: FormGroup;
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
            console.log(hall);
          })
          .catch(error => console.log(error));
      });
      this.initForm();

  }

  initForm() {
    const openMonday = '';
    const closedMonday = '';

    const openTuesday = '';
    const closedTuesday = '';

    const openWednesday = '';
    const closedWednesday = '';

    const openThursday = '';
    const closedThursday = '';

    const openFriday = '';
    const closedFriday = '';

    this.timesForm = new FormGroup({
      'startTimeMonday': new FormControl(openMonday),
      'closingTimeMonday': new FormControl(closedMonday),

      'startTimeTuesday': new FormControl(openTuesday),
      'closingTimeTuesday': new FormControl(closedTuesday),

      'startTimeWednesday': new FormControl(openWednesday),
      'closingTimeWednesday': new FormControl(closedWednesday),

      'startTimeThursday': new FormControl(openThursday),
      'closingTimeThursday': new FormControl(closedThursday),

      'startTimeFriday': new FormControl(openFriday),
      'closingTimeFriday': new FormControl(closedFriday),
    });

  }



  onSubmit(){
    console.log(this.hall.times[0].timeOpen)
  }

}
