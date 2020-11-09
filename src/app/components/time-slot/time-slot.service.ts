import { Injectable } from '@angular/core';
import { TimeSlot } from './time-slot.model';
@Injectable({
  providedIn: 'root'
})
export class TimeSlotService {
  getTimeSlot(): TimeSlot[] {
    return [
      { day: 1, timeStart: null, timeEnd: null },
      { day: 2, timeStart: null, timeEnd: null },
      { day: 3, timeStart: null, timeEnd: null },
      { day: 4, timeStart: null, timeEnd: null },
      { day: 5, timeStart: null, timeEnd: null },
      { day: 6, timeStart: null, timeEnd: null },
      { day: 7, timeStart: null, timeEnd: null }
    ];
  }
}