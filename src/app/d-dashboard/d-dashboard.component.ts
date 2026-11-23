import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Appointment, AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-d-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './d-dashboard.component.html',
  styleUrl: './d-dashboard.component.css'
})
export class DDashboardComponent  implements OnInit {
  appointments: Appointment[] = [];
  pendingAppointments: Appointment[] = [];
  approvedAppointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });
    
    this.appointmentService.getPendingAppointments().subscribe(pendingAppointments => {
      this.pendingAppointments = pendingAppointments;
    });
    
    this.appointmentService.getApprovedAppointments().subscribe(approvedAppointments => {
      this.approvedAppointments = approvedAppointments;
    });
  }

  
}
