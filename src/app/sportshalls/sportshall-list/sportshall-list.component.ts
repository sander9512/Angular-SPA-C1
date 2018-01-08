import {Component, OnDestroy, OnInit} from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-sportshall-list',
  templateUrl: './sportshall-list.component.html',
  styleUrls: ['./sportshall-list.component.css']
})
export class SportshallListComponent implements OnInit, OnDestroy {
  sportsHalls: SportsHall[];
  subscription: Subscription;

  constructor(private sportsHallsService: SportsHallsService) { }

  ngOnInit() {
    this.subscription = this.sportsHallsService.hallsChanged
      .subscribe(
        (halls: SportsHall[]) => {
          this.sportsHalls = halls;
        }
      );
    this.sportsHallsService.getSportsHalls()
      .then(halls => {
        this.sportsHalls = halls;
      })
      .catch(error => console.log(error));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
