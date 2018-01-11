import {Component, Input, OnInit} from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-maintenance-new',
  templateUrl: './maintenance-new.component.html',
  styleUrls: ['./maintenance-new.component.css']
})
export class MaintenanceNewComponent implements OnInit {
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
      'endTime': new FormControl(null),
      'type': new FormControl(null, Validators.required),
      'object': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onMaintenanceSubmit() {
    console.log(this.form.value);
  }
}
