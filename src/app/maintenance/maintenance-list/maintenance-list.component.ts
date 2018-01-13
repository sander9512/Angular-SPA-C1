import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../shared/models/maintenance.model';
import {MaintenanceService} from '../../shared/services/maintenance.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenances: Maintenance[];
  subscription: Subscription;
  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit() {
    this.subscription = this.maintenanceService.maintenanceChanged
      .subscribe(
        (maintenances: Maintenance[]) => {
          this.maintenances = maintenances;
          console.log('onderhoud', this.maintenances);
        }
      );
    this.maintenanceService.getMaintenances()
      .then(maintenances => {
        this.maintenances = maintenances;
      })
      .catch(error => console.log(error));
  }

}
