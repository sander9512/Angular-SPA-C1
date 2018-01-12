import {Component, Input, OnInit} from '@angular/core';
import {Maintenance} from '../../../shared/models/maintenance.model';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
  styleUrls: ['./maintenance-item.component.css']
})
export class MaintenanceItemComponent implements OnInit {
  @Input() maintenance: Maintenance;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
    this.maintenance = new Maintenance({'_startTime': new Date(), '_endTime': new Date()});
  }



}
