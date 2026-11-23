import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';

export interface TimeSlot {
  start: string;
  end: string;
  isAvailable: boolean;
}

export interface DaySchedule {
  day: string;
  morning: TimeSlot;
  afternoon: TimeSlot;
  evening: TimeSlot;
}

export interface Schedule {
  doctorId: string;
  weekSchedule: DaySchedule[];
}

@Component({
  selector: 'app-d-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-schedule.component.html',
  styleUrl: './d-schedule.component.css'
})
export class DScheduleComponent implements OnInit {
schedule: Schedule | null = null;
  doctorId: string = 'd1'; // Assuming we have the doctor ID
  
  constructor(private scheduleService: ScheduleService) {}
  
  ngOnInit() {
    this.scheduleService.getDoctorSchedule(this.doctorId).subscribe(schedule => {
      this.schedule = schedule;
    });
  }
  
  toggleTimeSlot(day: string, slotType: 'morning' | 'afternoon' | 'evening') {
    if (!this.schedule) return;
    
    const daySchedule = this.schedule.weekSchedule.find(d => d.day === day);
    if (daySchedule) {
      daySchedule[slotType].isAvailable = !daySchedule[slotType].isAvailable;
    }
  }
  
  saveSchedule() {
    if (!this.schedule) return;
    
    // In a real app, you would save the schedule to the backend
    alert('Schedule saved successfully!');
  }
  
  calculateTotalHours(): number {
    if (!this.schedule) return 0;
    
    let totalHours = 0;
    this.schedule.weekSchedule.forEach(day => {
      if (day.morning.isAvailable) totalHours += 4; // 4 hours for morning
      if (day.afternoon.isAvailable) totalHours += 3; // 3 hours for afternoon
      if (day.evening.isAvailable) totalHours += 3; // 3 hours for evening
    });
    
    return totalHours;
  }
  
  calculateAvailableSlots(): number {
    if (!this.schedule) return 0;
    
    let availableSlots = 0;
    this.schedule.weekSchedule.forEach(day => {
      if (day.morning.isAvailable) availableSlots++;
      if (day.afternoon.isAvailable) availableSlots++;
      if (day.evening.isAvailable) availableSlots++;
    });
    
    return availableSlots;
  }
  
  calculateUtilizationRate(): number {
    if (!this.schedule) return 0;
    
    const totalSlots = this.schedule.weekSchedule.length * 3; // 3 slots per day
    const availableSlots = this.calculateAvailableSlots();
    
    return Math.round((availableSlots / totalSlots) * 100);
  }
}
