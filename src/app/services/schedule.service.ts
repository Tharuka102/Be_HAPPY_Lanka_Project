import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Schedule } from '../d-schedule/d-schedule.component';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // Mock data for doctor schedule
  private doctorSchedule: Schedule = {
    doctorId: 'd1',
    weekSchedule: [
      {
        day: 'Monday',
        morning: { start: '08:00 AM', end: '12:00 PM', isAvailable: true },
        afternoon: { start: '01:00 PM', end: '04:00 PM', isAvailable: true },
        evening: { start: '05:00 PM', end: '08:00 PM', isAvailable: false }
      },
      {
        day: 'Tuesday',
        morning: { start: '08:00 AM', end: '12:00 PM', isAvailable: true },
        afternoon: { start: '01:00 PM', end: '04:00 PM', isAvailable: false },
        evening: { start: '05:00 PM', end: '08:00 PM', isAvailable: true }
      },
      {
        day: 'Wednesday',
        morning: { start: '08:00 AM', end: '12:00 PM', isAvailable: false },
        afternoon: { start: '01:00 PM', end: '04:00 PM', isAvailable: true },
        evening: { start: '05:00 PM', end: '08:00 PM', isAvailable: true }
      },
      {
        day: 'Thursday',
        morning: { start: '08:00 AM', end: '12:00 PM', isAvailable: true },
        afternoon: { start: '01:00 PM', end: '04:00 PM', isAvailable: true },
        evening: { start: '05:00 PM', end: '08:00 PM', isAvailable: false }
      },
      {
        day: 'Friday',
        morning: { start: '08:00 AM', end: '12:00 PM', isAvailable: true },
        afternoon: { start: '01:00 PM', end: '04:00 PM', isAvailable: false },
        evening: { start: '05:00 PM', end: '08:00 PM', isAvailable: false }
      },
      {
        day: 'Saturday',
        morning: { start: '09:00 AM', end: '12:00 PM', isAvailable: true },
        afternoon: { start: '01:00 PM', end: '03:00 PM', isAvailable: false },
        evening: { start: '05:00 PM', end: '07:00 PM', isAvailable: false }
      },
      {
        day: 'Sunday',
        morning: { start: '00:00 AM', end: '00:00 AM', isAvailable: false },
        afternoon: { start: '00:00 PM', end: '00:00 PM', isAvailable: false },
        evening: { start: '00:00 PM', end: '00:00 PM', isAvailable: false }
      }
    ]
  };

  constructor() { }

  getDoctorSchedule(doctorId: string): Observable<Schedule> {
    return of(this.doctorSchedule);
  }

  updateTimeSlot(doctorId: string, day: string, slotType: 'morning' | 'afternoon' | 'evening', isAvailable: boolean): Observable<Schedule> {
    const dayIndex = this.doctorSchedule.weekSchedule.findIndex(schedule => schedule.day === day);
    if (dayIndex !== -1) {
      this.doctorSchedule.weekSchedule[dayIndex][slotType].isAvailable = isAvailable;
    }
    return of(this.doctorSchedule);
  }
}