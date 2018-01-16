import { Component, OnInit } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular';
import {BookingsService} from '../../shared/services/booking.service';
import {Booking} from '../../shared/models/booking.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {ScheduleItem} from '../../shared/models/ScheduleItem';

@Component({
  selector: 'app-sportshall-schedule',
  templateUrl: './sportshall-schedule.component.html',
  styleUrls: ['./sportshall-schedule.component.css']
})
export class SportshallScheduleComponent implements OnInit {
  appointments = [{
    text: 'Boeking 1',
    startDate: new Date('2018-01-16T08:00:00'),
    endDate: new Date('2018-01-16T10:00:00')
  }, {
    text: 'Boeking 2',
    startDate: new Date('2018-01-17T08:00:00'),
    endDate: new Date('2018-01-17T10:00:00')
  }];
  bookings: Booking[];
  scheduleData: ScheduleItem[];
  startDayHour= 8;
  currentDate = new Date();
  id: number;

  constructor(private bookingService: BookingsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this.bookingService.getBookingsWithHall(this.id)
          .then(bookings => {
            this.bookings = bookings;
            this.scheduleData = this.bookingService.createScheduleData(this.bookings);
            console.log('boekingen', this.scheduleData);
          })
          .catch(error => console.log(error));
      });
  }
}
