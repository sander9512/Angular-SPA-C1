import {Component, Input, OnInit} from '@angular/core';
import {ClosingDay} from '../../shared/models/closingday.model';

@Component({
  selector: 'app-closing-time-item',
  templateUrl: './closing-time-item.component.html',
  styleUrls: ['./closing-time-item.component.css']
})
export class ClosingTimeItemComponent implements OnInit {
@Input() closingDay: ClosingDay;
  constructor() { }

  ngOnInit() {
  }

}
