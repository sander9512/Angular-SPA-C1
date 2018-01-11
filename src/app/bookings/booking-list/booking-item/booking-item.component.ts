import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../../shared/models/booking.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingsService} from '../../../shared/services/booking.service';


@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
  @Input() booking: Booking;
  @Input() index: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookingsService: BookingsService) { }

  ngOnInit() {
  }

  onDetail() {
    this.router.navigate([this.booking.id], { relativeTo: this.route} );
  }
}
