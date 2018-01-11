import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../shared/models/maintenance.model';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenances: Maintenance[];
  constructor() { }

  ngOnInit() {
  }

}
