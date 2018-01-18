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
  dataSource: DataSource;
  resources = [];
  halls = new Array<SportsHall>();
  staff: User[];
  staffItems: Staff[];
  subscription: Subscription;
  workDays = new Array<WorkDay>();
    constructor(private route: ActivatedRoute, private hallService: SportsHallsService, private authService: AuthService,
                private userService: UserService, private workdayService: WorkdayService) { }

  ngOnInit() {
      this.currentUser = this.authService.getUser();
    // this.subscription = this.hallService.hallsChanged
    //   .subscribe(
    //     (halls: SportsHall[]) => {
    //       this.halls = halls;
    //     }
    //   );
    //   this.hallService.getHallsWithOwner(this.currentUser.propID)
    //     .then(halls => {
    //       this.halls = halls;
    //       console.log(this.halls);
    //     })
    //     .catch(error => console.log(error));
    //   console.log(this.halls[0].id);
      this.userService.getStaffWithId(1)
        .then(staff => {
          this.staff = staff;
          this.staffItems = this.userService.createStaffItems(this.staff);
          console.log('staff', this.staff);
          console.log('items', this.staffItems);
        })
        .catch(error => console.log(error));
    // this.resources = [
    //   // "Room" resource kind
    //   {
    //     fieldExpr: 'roomId',
    //     dataSource: [
    //       { id: 1, text: 'Room101', color: 'green' },
    //       { id: 2, text: 'Room102', color: 'red' },
    //       // ...
    //     ]
    //   },
    //   // "Teacher" resource kind
    //   {
    //     fieldExpr: 'teacherId',
    //     dataSource: [
    //       { id: 1, text: 'Sandra Johnson', color: 'yellow' },
    //       { id: 2, text: 'John Heart', color: 'blue' },
    //       // ...
    //     ],
    //     allowMultiple: true
    //   }
    // ];
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
    // const workDay = new WorkDay();
    // workDay.startDate = startTime;
    // workDay.endDate = endTime;
    // workDay.userID = user._id;
    // workDay.text = user.name;
      const workDay = new WorkDay(user._id, user.name, startTime, endTime);
      console.log(workDay);
      this.workdayService.addFakeWorkDay(workDay);
      this.workDays = this.workdayService.getFakeWorkDays();

  }
  onAppointmentUpdated(e) {
      console.log(e);
  }
  onAppointmentDeleted(e) {
      console.log(e);
  }
}
