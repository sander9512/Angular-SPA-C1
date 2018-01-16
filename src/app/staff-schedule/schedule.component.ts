import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {DxSchedulerComponent, DxSchedulerModule} from 'devextreme-angular';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {ScheduleItem} from './../shared/models/ScheduleItem';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
  currentDate = new Date();
  scheduleData: ScheduleItem[];
  startDayHour = 8;
  appointments = [{
    text: 'Planning',
    startDate: new Date(2016, 4, 25, 9, 0),
    endDate: new Date(2016, 4, 25, 9, 30)
  }];
    constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onAppointmentAdded(e) {
      console.log(e);
  }
  onAppointmentUpdated(e) {
      console.log(e);
  }
  onAppointmentDeleted(e) {
      console.log(e);
  }
}
