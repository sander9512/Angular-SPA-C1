import {Component, OnDestroy, OnInit} from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';


@Component({
  selector: 'app-sportshall-list',
  templateUrl: './sportshall-list.component.html',
  styleUrls: ['./sportshall-list.component.css']
})
export class SportshallListComponent implements OnInit, OnDestroy {
  sportsHalls: SportsHall[];
  subscription: Subscription;
  currentUser: User;

  constructor(private sportsHallsService: SportsHallsService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
    this.subscription = this.sportsHallsService.hallsChanged
      .subscribe(
        (halls: SportsHall[]) => {
          this.sportsHalls = halls;
        }
      );
    this.sportsHallsService.getHallsWithOwner(this.currentUser.propID)
      .then(halls => {
        this.sportsHalls = halls;
      })
      .catch(error => console.log(error));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
