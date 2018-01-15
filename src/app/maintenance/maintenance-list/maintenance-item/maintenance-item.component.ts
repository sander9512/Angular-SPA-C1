import {Component, Input, OnInit} from '@angular/core';
import {Maintenance} from '../../../shared/models/maintenance.model';
import { DatePipe } from '@angular/common';
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
  }



}
