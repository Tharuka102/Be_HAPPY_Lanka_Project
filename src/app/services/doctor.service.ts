import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Doctor {
  id: string;
  name: string;
  profilePic: string;
  specialization: string;
  yearsOfExperience: number;
  age: number;
  gender: string;
  contactNumber: string;
  email: string;
  qualification: string;
  licenseNumber: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  // Mock data for doctor
  private currentDoctor: Doctor = {
    id: 'd1',
    name: 'Dr. Sarah Lee',
    profilePic: 'https://images.pexels.com/photos/5214976/pexels-photo-5214976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specialization: 'Cardiologist',
    yearsOfExperience: 10,
    age: 38,
    gender: 'Female',
    contactNumber: '+1 (555) 123-4567',
    email: 'dr.sarah.lee@example.com',
    qualification: 'MD, FACC, Board Certified',
    licenseNumber: 'MED-12345-CA',
    bio: 'Dr. Sarah Lee is an experienced cardiologist with over 10 years of practice. She specializes in preventive cardiology and heart failure management.'
  };

  constructor() { }

  getCurrentDoctor(): Observable<Doctor> {
    return of(this.currentDoctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    this.currentDoctor = { ...this.currentDoctor, ...doctor };
    return of(this.currentDoctor);
  }
}