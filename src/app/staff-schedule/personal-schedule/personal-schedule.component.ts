import { Component, OnInit } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular';
import {ActivatedRoute} from '@angular/router';
import {ScheduleItem} from '../../shared/models/ScheduleItem';

import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/user.model';
import {WorkDay} from '../../shared/models/workday.model';
import {WorkdayService} from '../../shared/services/workday.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {WorkdaySchedule} from '../../shared/models/workday-schedule.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {SportsHall} from '../../shared/models/sportshall.model';

@Component({
  selector: 'app-personal-schedule',
  templateUrl: './personal-schedule.component.html',
  styleUrls: ['./personal-schedule.component.css']
})
export class PersonalScheduleComponent implements OnInit {

  user: User;
  subscription: Subscription;
  currentDate = new Date();
  workdays: WorkDay[];
  hall: SportsHall;
  startDayHour = 8;
  workdaySchedules = new Array<WorkdaySchedule>();

  constructor(private route: ActivatedRoute, private userService: AuthService,
              private workdayService: WorkdayService, private hallService: SportsHallsService) {

  }

  ngOnInit() {
  this.user = this.userService.getUser();
  console.log(this.user);
  this.workdayService.getWorkDaysWithUserId(this.user._id)
    .then(workdays => {
      this.workdays = workdays;
      console.log(this.workdays);
      this.workdaySchedules = this.workdayService.createWorkDayScheduleItems(this.workdays);
    })
    .catch(error => console.log(error));
  this.hallService.getSportsHall(this.user.hallID)
    .then(hall => {
      this.hall = hall;
      console.log(this.hall)
    })
    .catch(error => console.log(error));

    // this.workdayService.getWorkDaysWithUserId(this.user.id);
  }

}
