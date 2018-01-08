import {Component, Input, OnInit} from '@angular/core';
import {OpeningsTime} from '../../shared/models/openingstime.model';

@Component({
  selector: 'app-sportshall-time-item',
  templateUrl: './sportshall-time-item.component.html',
  styleUrls: ['./sportshall-time-item.component.css']
})
export class SportshallTimeItemComponent implements OnInit {
  @Input() time: OpeningsTime;
  constructor() { }

  ngOnInit() {
    console.log(this.time);
  }

}
