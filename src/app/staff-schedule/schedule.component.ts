import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {DxSchedulerComponent, DxSchedulerModule} from 'devextreme-angular';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {ScheduleItem} from './../shared/models/ScheduleItem';
import {SportsHallsService} from '../shared/services/sportshall.service';
import {User} from '../shared/models/user.model';
import {AuthService} from '../shared/services/auth.service';
import {SportsHall} from '../shared/models/sportshall.model';
import {UserService} from '../shared/services/user.service';
import DevExpress from 'devextreme/bundles/dx.all';
import DataSource from 'devextreme/data/data_source';
import {Staff} from '../shared/models/staff.model';
import {WorkDay} from '../shared/models/workday.model';
import {WorkdayService} from '../shared/services/workday.service';
import {WorkdaySchedule} from "../shared/models/workday-schedule.model";

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
  currentUser: User;
  workDaySchedules = new Array<WorkdaySchedule>();
  hall: SportsHall;
  staff: User[];
  staffItems: Staff[];
  id: number;
  subscription: Subscription;
  workDays = new Array<WorkDay>();
    constructor(private route: ActivatedRoute, private hallService: SportsHallsService, private authService: AuthService,
                private userService: UserService, private workdayService: WorkdayService) { }

  ngOnInit() {
      this.currentUser = this.authService.getUser();
      this.route.params
        .subscribe(params => {
          this.id = params['id'];
          this.hallService.getSportsHall(this.id)
            .then(hall => {
              this.hall = hall;
              console.log('hall retrieved', this.hall);
            })
            .catch(error => console.log(error));
        });
      this.userService.getStaffWithId(this.id)
        .then(staff => {
          this.staff = staff;
          this.staffItems = this.userService.createStaffItems(this.staff);
          console.log('staff', this.staff);
          console.log('items', this.staffItems);
        })
        .catch(error => console.log(error));
      this.getWorkDays();
  }
  onAppointmentAdded(e) {
      console.log('add method called');
      console.log(e);
      let user;
      for (const i of this.staff) {
        if (i._id === e.appointmentData.userID) {
          user = i;
        }
      }
      const startTime = e.appointmentData.startDate;
      const endTime = e.appointmentData.endDate;
      const workDay = new WorkDay(user._id, this.id, user.name, startTime, endTime);
      console.log(workDay);
      this.workdayService.addWorkday(workDay);
      this.getWorkDays();

  }
  // onAppointmentUpdated(e) {
  //     console.log(e);
  // }
  onAppointmentDeleted(e) {
      console.log(e);
      console.log('id', e.appointmentData._id);
      this.workdayService.deleteWorkday(e.appointmentData._id)
        .then(() => {
        this.getWorkDays();
        })
        .catch(error => console.log(error));
  }
  getWorkDays() {
      this.workdayService.getWorkDaysWithHallId(this.id)
        .then(workdays => {
          this.workDays = workdays;
          this.workDaySchedules = this.workdayService.createWorkDayScheduleItems(this.workDays);
          console.log('workdays', this.workDaySchedules);
        })
        .catch(error => console.log(error));
  }
}
