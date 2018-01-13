import { Component, OnInit } from '@angular/core';
import {SportsHall} from '../shared/models/sportshall.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SportsHallsService} from '../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-closing-time',
  templateUrl: './closing-time.component.html',
  styleUrls: ['./closing-time.component.css']
})
export class ClosingTimeComponent implements OnInit {
  hall: SportsHall;
  id: number;
  form: FormGroup;
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
    this.form = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'startTime': new FormControl(null),
      'closingTime': new FormControl(null),
    });
  }

  onClosingTimeSubmit() {
    console.log(this.form.value);
  }
}
