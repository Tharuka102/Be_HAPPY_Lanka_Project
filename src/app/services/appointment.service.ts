import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientImage: string;
  date: string;
  time: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // Mock data for appointments
  private appointments: Appointment[] = [
    {
      id: 'a1',
      patientId: 'p1',
      patientName: 'John Smith',
      patientImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '20/11/2024',
      time: '09:00 AM',
      status: 'pending',
      notes: 'First consultation for heart palpitations'
    },
    {
      id: 'a2',
      patientId: 'p2',
      patientName: 'Emma Johnson',
      patientImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '20/11/2024',
      time: '02:30 PM',
      status: 'approved',
      notes: 'Follow-up appointment'
    },
    {
      id: 'a3',
      patientId: 'p3',
      patientName: 'Michael Chen',
      patientImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '21/11/2024',
      time: '11:00 AM',
      status: 'approved',
      notes: 'Annual checkup'
    },
    {
      id: 'a4',
      patientId: 'p4',
      patientName: 'Olivia Rodriguez',
      patientImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '21/11/2024',
      time: '04:15 PM',
      status: 'pending',
      notes: 'New patient consultation'
    }
  ];

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  getPendingAppointments(): Observable<Appointment[]> {
    return of(this.appointments.filter(appointment => appointment.status === 'pending'));
  }

  getApprovedAppointments(): Observable<Appointment[]> {
    return of(this.appointments.filter(appointment => appointment.status === 'approved'));
  }

  updateAppointmentStatus(id: string, status: 'pending' | 'approved' | 'rejected' | 'completed'): Observable<Appointment> {
    const index = this.appointments.findIndex(appointment => appointment.id === id);
    if (index !== -1) {
      this.appointments[index].status = status;
      return of(this.appointments[index]);
    }
    throw new Error('Appointment not found');
  }
}