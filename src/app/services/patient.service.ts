import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Patient {
  id: number;
  name: string;
  role: string;
  profilePic: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private currentPatient: Patient = {
    id: 1,
    name: 'A.b.C. Perera',
    role: 'Patient',
    profilePic: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300'
  };

  constructor() { }

  getCurrentPatient(): Observable<Patient> {
    return of(this.currentPatient);
  }
}