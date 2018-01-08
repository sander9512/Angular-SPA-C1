import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../shared/models/booking.model';

@Component({
  selector: 'app-booking-item-small',
  templateUrl: './booking-item-small.component.html',
  styleUrls: ['./booking-item-small.component.css']
})
export class BookingItemSmallComponent implements OnInit {
  @Input() booking: Booking;
  constructor() { }

  ngOnInit() {
  }

}
