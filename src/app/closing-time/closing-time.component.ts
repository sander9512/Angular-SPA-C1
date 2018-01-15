import { Component, OnInit } from '@angular/core';
import {SportsHall} from '../shared/models/sportshall.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SportsHallsService} from '../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {ClosingDayService} from '../shared/services/closingday.service';
import {OpeningsTime} from '../shared/models/openingstime.model';
import {ClosingDay} from '../shared/models/closingday.model';

@Component({
  selector: 'app-closing-time',
  templateUrl: './closing-time.component.html',
  styleUrls: ['./closing-time.component.css']
})
export class ClosingTimeComponent implements OnInit {
  hall: SportsHall;
  id: number;
  form: FormGroup;
  constructor(private hallService: SportsHallsService, private route: ActivatedRoute, private closingService: ClosingDayService) {
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
    this.form = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'startTime': new FormControl(null),
      'closingTime': new FormControl(null),
      'allDay': new FormControl(false),
      'description': new FormControl()
    });
  }

  onClosingTimeSubmit() {
    console.log(this.form);
    const value = this.form.value;
    if (value.allDay === false) {
      const closingDay = new ClosingDay({'_sportsHallId': this.id, '_date': value.date, '_startTime': value.startTime,
        '_endTime': value.closingTime, '_description': value.description, '_allDay': value.allDay });
      console.log('dagdeel', closingDay);
      this.closingService.addClosingDay(closingDay);
    } else if (value.allDay === true) {
      const closingDay = new ClosingDay({'_sportsHallId': this.id, '_date': value.date,
        '_allDay': value.allDay, '_description': value.description});
      console.log('hele dag', closingDay);
      this.closingService.addClosingDay(closingDay);
    }
    this.form.reset();
  }
}
