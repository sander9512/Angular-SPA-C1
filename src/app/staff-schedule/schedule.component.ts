import { Component, OnInit } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {ScheduleItem} from './../shared/models/ScheduleItem';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  currentDate = new Date();
  scheduleData: ScheduleItem[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
