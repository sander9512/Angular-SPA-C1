export class Booking {
  public sportsHallName: string;
  public customerName: string;
  public dateTime: string;
  public activity: string;
  public room: string;
  public remainingCapacity: string;
  public startTime: string;
  public endTime: string;


  constructor (sportsHallName: string, customerName: string, dateTime: string, activity: string, room: string,
               remainingCapacity: string, startTime: string, endTime: string) {
    this.sportsHallName = sportsHallName;
    this.customerName = customerName;
    this.dateTime = dateTime;
    this.activity = activity;
    this.room = room;
    this.remainingCapacity = remainingCapacity;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
