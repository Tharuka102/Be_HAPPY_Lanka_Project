import { Component } from '@angular/core';
import { Doctor, DoctorService } from '../services/doctor.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,NgIf],
  templateUrl: './d-profile.component.html',
  styleUrl: './d-profile.component.css'
})
export class DProfileComponent {
 doctor: Doctor = {} as Doctor;
  activeTab: 'personal' | 'professional' | 'settings' = 'personal';
  
  constructor(private doctorService: DoctorService) {}
  
  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(doctor => {
      this.doctor = doctor;
    });
  }
  
  saveProfile() {
    this.doctorService.updateDoctor(this.doctor).subscribe(updatedDoctor => {
      this.doctor = updatedDoctor;
      alert('Profile updated successfully!');
    });
  }
}
