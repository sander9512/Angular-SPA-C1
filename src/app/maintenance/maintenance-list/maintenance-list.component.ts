import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../shared/models/maintenance.model';
import {MaintenanceService} from '../../shared/services/maintenance.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenances: Maintenance[];
  subscription: Subscription;
  startDate: Date;
  endDate: Date;
  id: number;
  warning = '';
  constructor(private maintenanceService: MaintenanceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log('params: ', params);
        console.log('params[\'id\']: ' + params['id']);
        this.id = params['id'];
    this.subscription = this.maintenanceService.maintenanceChanged
      .subscribe(
        (maintenances: Maintenance[]) => {
          this.maintenances = maintenances;
          console.log('onderhoud', this.maintenances);
        }
      );
    this.maintenanceService.getMaintenancesWithId(this.id)
      .then(maintenances => {
        this.maintenances = maintenances;
      })
      .catch(error => console.log(error));
    });
  }

  onNewMaintenance() {
      this.router.navigate(['new'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onFilter() {
    if (this.startDate != null && this.endDate != null && this.endDate > this.startDate) {
      this.warning = '';
      const dates = [
        this.startDate, this.endDate
        ];
      this.maintenanceService.filterMaintenances(this.id, dates)
        .then(maintenances => {
          this.maintenances = maintenances;
      })
        .catch(error => console.log(error));
    } else {
     this.warning = 'Controleer of de begin en einddatum correct zijn';
    }
  }
}
