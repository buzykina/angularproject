import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prevMonth() : void {
  	this.currentDate = moment(this.currentDate).substract(1, 'months');
  }	

  nextMonth() : void {
  	this.currentDate = moment(this.currentDate).add(1,'months');
  }

  generateCalendar(): void {
  	const dates = this.fillDates(this.currentDate);
  	const weeks: CalendarDate[][] = [];
  	while (dates.length > 0) {
  		weeks.push(dates.splice(0,7));
  	}
  	this.weeks = weeks;
  }

}
