import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../../shared/models/booking.model';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
  @Input() booking: Booking;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }


}
