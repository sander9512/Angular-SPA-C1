import {OpeningsTime} from './openingstime.model';
import {Room} from './room.model';
import {Facility} from './facility.model';
import {Activity} from './activity.model';

export class SportsHall {
  private _id: number;
  private _name: string;
  private _city: string;
  private _street: string;
  private _houseNumber: string;
  private _phone: string;
  private _description: string;
  private _zip: string;
  private _owner: string;
  private _times: OpeningsTime[];
  private _rooms: Room[];
  private _facilities: Facility[];
  private _activities: Activity[];


  // constructor(name: string, city: string, street: string, houseNumber: string, phone: string) {
  //   this._name = name;
  //   this._city = city;
  //   this._street = street;
  //   this._houseNumber = houseNumber;
  //   this._phone = phone;
  // }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get houseNumber(): string {
    return this._houseNumber;
  }

  set houseNumber(value: string) {
    this._houseNumber = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get zip(): string {
    return this._zip;
  }

  set zip(value: string) {
    this._zip = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }

  get times(): OpeningsTime[] {
    return this._times;
  }

  set times(value: OpeningsTime[]) {
    this._times = value;
  }

  get rooms(): Room[] {
    return this._rooms;
  }

  set rooms(value: Room[]) {
    this._rooms = value;
  }

  get facilities(): Facility[] {
    return this._facilities;
  }

  set facilities(value: Facility[]) {
    this._facilities = value;
  }

  get activities(): Activity[] {
    return this._activities;
  }

  set activities(value: Activity[]) {
    this._activities = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
