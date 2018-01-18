import { Component, OnInit } from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingsService} from '../../shared/services/booking.service';
import {Booking} from '../../shared/models/booking.model';
import {ClosingDayService} from '../../shared/services/closingday.service';
import {ClosingDay} from '../../shared/models/closingday.model';

@Component({
  selector: 'app-sportshall-detail',
  templateUrl: './sportshall-detail.component.html',
  styleUrls: ['./sportshall-detail.component.css']
})
export class SportshallDetailComponent implements OnInit {
  hall: SportsHall = new SportsHall();
  bookings: Booking[];
  closingDays: ClosingDay[];
  id = 0;
  constructor(private hallService: SportsHallsService, private bookingService: BookingsService,
              private route: ActivatedRoute, private router: Router, private closingService: ClosingDayService) { }

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
        this.bookingService.getBookingsWithHall(this.id)
          .then(bookings => {
            this.bookings = bookings;
          })
          .catch(error => console.log(error));
        this.closingService.getClosingDays(this.id)
          .then(closingDays => {
            this.closingDays = closingDays;
          })
          .catch(error => console.log(error));
      });
  }

  editTimes() {
    this.router.navigate(['edit-times'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onMaintenance() {
    this.router.navigate(['maintenance'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onSchedule() {
    this.router.navigate(['schedule'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onClosingDay() {
    this.router.navigate(['new-closingtime'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onStaffSchedule() {
    this.router.navigate(['staff/schedule'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
