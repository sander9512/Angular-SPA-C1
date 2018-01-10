import { Component, OnInit } from '@angular/core';
import {Booking} from '../../shared/models/booking.model';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookingsService} from '../../shared/services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  booking: Booking;
  id: number;
  constructor(private bookingsService: BookingsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.booking = this.bookingsService.getBooking(this.id);
        }
      );
  }

}
