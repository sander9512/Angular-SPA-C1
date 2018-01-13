import {Component, Input, OnInit} from '@angular/core';
import {SportsHall} from '../../shared/models/sportshall.model';
import {SportsHallsService} from '../../shared/services/sportshall.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Room} from '../../shared/models/room.model';
import {Activity} from '../../shared/models/activity.model';
import {Facility} from '../../shared/models/facility.model';
import {Maintenance} from '../../shared/models/maintenance.model';
import {MaintenanceService} from '../../shared/services/maintenance.service';

@Component({
  selector: 'app-maintenance-new',
  templateUrl: './maintenance-new.component.html',
  styleUrls: ['./maintenance-new.component.css']
})
export class MaintenanceNewComponent implements OnInit {
  hall: SportsHall;
  id: number;
  form: FormGroup;
  selectedType: string;
  minDate = Date.now();
  selectedObject: MaintenanceObject;
  objects: MaintenanceObject[];
  rooms: Room[];
  activities: Activity[];
  facilities: Facility[];
  types = [
    'Zaalobject',
    'Faciliteit',
    'Zaal'
  ];
  constructor(private hallService: SportsHallsService, private route: ActivatedRoute, private maintenanceService: MaintenanceService) {
  }

  ngOnInit() {
    this.selectedType = this.types[0];
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this.hallService.getSportsHall(this.id)
          .then(hall => {
            this.hall = hall;
            this.rooms = hall.rooms;
            this.activities = hall.sportsHallActivities;
            this.facilities = hall.sportsHallFacilities;
            console.log('rooms', this.rooms);
            console.log('activ', this.activities);
            console.log('facil', this.facilities);
            console.log(hall);
          })
          .catch(error => console.log(error));
      });
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'startTime': new FormControl(null),
      'endTime': new FormControl(null),
      'type': new FormControl(null, Validators.required),
      'object': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onMaintenanceSubmit() {
    const value = this.form.value;
    console.log(value);
    const maintenance = new Maintenance({'_sportsHallId': this.id, '_maintenanceType': this.selectedType,
      '_maintenanceObject': this.selectedObject, '_date': value.date, '_startTime': value.startTime,
      '_endTime': value.endTime, '_description': value.description });
    console.log('maintenance', maintenance);
    this.maintenanceService.addMaintenance(maintenance);
    this.form.reset();

  }

  onChangeType(type) {
    this.selectedType = type;
    if (this.selectedType === 'Zaal') {
      this.objects = this.rooms;
    } else if (this.selectedType === 'Faciliteit') {
      this.objects = this.facilities;
    } else {
      this.objects = this.activities;
    }
    console.log(this.objects);
    console.log('Type', this.selectedType);
  }

  onChangeObject(object) {
    this.selectedObject = object;
    console.log('object', this.selectedObject);
  }
}
