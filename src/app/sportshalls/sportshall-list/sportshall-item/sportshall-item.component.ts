import {Component, Input, OnInit} from '@angular/core';
import {SportsHall} from '../../../shared/models/sportshall.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sportshall-item',
  templateUrl: './sportshall-item.component.html',
  styleUrls: ['./sportshall-item.component.css']
})
export class SportshallItemComponent implements OnInit {
  @Input() sportsHall: SportsHall;
  @Input() index: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
