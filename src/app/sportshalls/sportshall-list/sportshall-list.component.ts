import { Component, OnInit } from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';


@Component({
  selector: 'app-sportshall-list',
  templateUrl: './sportshall-list.component.html',
  styleUrls: ['./sportshall-list.component.css']
})
export class SportshallListComponent implements OnInit {
  sportsHalls: SportsHall[];

  constructor(private sportsHallsService: SportsHallsService) { }

  ngOnInit() {
    this.sportsHalls = this.sportsHallsService.getSportsHalls();
  }

}
