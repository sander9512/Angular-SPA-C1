import { Component, OnInit } from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sportshall-detail',
  templateUrl: './sportshall-detail.component.html',
  styleUrls: ['./sportshall-detail.component.css']
})
export class SportshallDetailComponent implements OnInit {
  hall: SportsHall = new SportsHall();
  id = 0;
  constructor(private hallService: SportsHallsService, private route: ActivatedRoute) { }

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
      });
  }

  editTimes() {
  }
}
