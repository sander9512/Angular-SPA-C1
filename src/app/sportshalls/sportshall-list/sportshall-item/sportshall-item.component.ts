import {Component, Input, OnInit} from '@angular/core';
import {SportsHall} from '../../../shared/models/sportshall.model';

@Component({
  selector: 'app-sportshall-item',
  templateUrl: './sportshall-item.component.html',
  styleUrls: ['./sportshall-item.component.css']
})
export class SportshallItemComponent implements OnInit {
  @Input() sportsHall: SportsHall;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
