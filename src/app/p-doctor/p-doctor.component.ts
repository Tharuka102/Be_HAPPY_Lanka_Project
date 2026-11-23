import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface TimeSlot {
  day: string;
  morning: string;
  afternoon: string;
  evening: string;
}

interface Doctor {
  id?: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  contactNumber: string;
  email: string;
  specialization: string;
  yearsOfExperience: number;
  qualification: string;
  licenseNumber: string;
  profilePic: string;
  schedule: TimeSlot[];
}

@Component({
  selector: 'app-doctor-d',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './p-doctor.component.html',
  styleUrl: './p-doctor.component.css'
})
export class PDoctorComponent  {
 
}