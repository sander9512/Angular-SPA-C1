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

@Component({
  selector: 'app-personal-schedule',
  templateUrl: './personal-schedule.component.html',
  styleUrls: ['./personal-schedule.component.css']
})
export class PersonalScheduleComponent implements OnInit {

  user: User;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private userService: AuthService,
              private workdayService: WorkdayService) {

  }

  ngOnInit() {

    // this.workdayService.getWorkDaysWithUserId(this.user.id);
  }

}
