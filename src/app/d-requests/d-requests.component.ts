import { Component, OnInit } from '@angular/core';
import { Appointment, AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-d-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-requests.component.html',
  styleUrl: './d-requests.component.css'
})
export class DRequestsComponent  implements OnInit {

  appointments: Appointment[] = [];
  pendingAppointments: Appointment[] = [];
  approvedAppointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  activeTab: 'pending' | 'approved' | 'all' = 'pending';
  
  constructor(private appointmentService: AppointmentService) {}
  
  ngOnInit() {
    this.loadAppointments();
  }
  
  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      this.filterAppointments();
    });
    
    this.appointmentService.getPendingAppointments().subscribe(pendingAppointments => {
      this.pendingAppointments = pendingAppointments;
      this.filterAppointments();
    });
    
    this.appointmentService.getApprovedAppointments().subscribe(approvedAppointments => {
      this.approvedAppointments = approvedAppointments;
      this.filterAppointments();
    });
  }
  
  setActiveTab(tab: 'pending' | 'approved' | 'all') {
    this.activeTab = tab;
    this.filterAppointments();
  }
  
  filterAppointments() {
    switch (this.activeTab) {
      case 'pending':
        this.filteredAppointments = this.pendingAppointments;
        break;
      case 'approved':
        this.filteredAppointments = this.approvedAppointments;
        break;
      case 'all':
        this.filteredAppointments = this.appointments;
        break;
    }
  }
  
  updateStatus(id: string, status: 'pending' | 'approved' | 'rejected' | 'completed') {
    this.appointmentService.updateAppointmentStatus(id, status).subscribe(() => {
      this.loadAppointments();
    });
  }
}
