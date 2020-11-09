import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { TimeSlot } from './time-slot.model';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { TimeSlotService } from './time-slot.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  form: FormGroup;
  dataSource: MatTableDataSource<TimeSlot>;
  displayedColumns: string[] = ['day', 'timeStart', 'timeEnd'];
  selection = new SelectionModel<TimeSlot>(true, []);
  constructor(private timeSlotService: TimeSlotService) { }
  ngOnInit(): void {
    this.createForm();
    const timeslot = this.timeSlotService.getTimeSlot();
    this.dataSource = new MatTableDataSource<TimeSlot>(timeslot);
  }
  createForm() {
    debugger
    this.form = new FormGroup({
      timeslot: new FormArray([
        this.addTimeSlot(1),
        this.addTimeSlot(2),
        this.addTimeSlot(3),
        this.addTimeSlot(4),
        this.addTimeSlot(5),
        this.addTimeSlot(6),
        this.addTimeSlot(7)
      ]),
    });
  }
  addTimeSlot(i) {
    return new FormGroup({
      day: new FormControl(i),
      timeStart: new FormControl(null),
      timeEnd: new FormControl(null)
    });
  }
  get timeslot() {
    return this.form.get('timeslot') as FormArray;
  }
}
