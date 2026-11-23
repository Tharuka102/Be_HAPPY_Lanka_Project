import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  specialization: string;
  imageUrl: string;
}

@Component({
  selector: 'app-p-request',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2 class="section-title">Our Specialist Doctors</h2>
      
      <div class="doctors-grid">
        <div class="doctor-card" *ngFor="let doctor of doctors">
          <div class="doctor-image">
            <img [src]="doctor.imageUrl" [alt]="doctor.name">
          </div>
          <div class="doctor-info">
            <h3 class="doctor-name">Dr {{ doctor.name }}</h3>
            <p class="doctor-qualification">{{ doctor.qualification }}</p>
            <p class="doctor-specialization">{{ doctor.specialization }}</p>
            <button class="view-btn" (click)="viewDoctor(doctor.id)">View</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 28px;
      font-weight: 600;
      color: #333;
      margin-bottom: 32px;
      text-align: center;
    }
    
    .doctors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .doctor-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .doctor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.12);
    }
    
    .doctor-image {
      height: 220px;
      overflow: hidden;
    }
    
    .doctor-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .doctor-card:hover .doctor-image img {
      transform: scale(1.05);
    }
    
    .doctor-info {
      padding: 16px 20px 20px;
    }
    
    .doctor-name {
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 8px;
      color: #333;
    }
    
    .doctor-qualification {
      font-size: 14px;
      color: #666;
      margin: 0 0 4px;
    }
    
    .doctor-specialization {
      font-size: 15px;
      font-weight: 500;
      color: #8b5cf6;
      margin: 0 0 16px;
    }
    
    .view-btn {
      background: #8b5cf6;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 8px 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;
    }
    
    .view-btn:hover {
      background: #7c3aed;
    }
    
    @media (max-width: 768px) {
      .doctors-grid {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 24px;
        margin-bottom: 24px;
      }
    }
  `]
})
export class PRequestComponent {
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Sarah Lee',
      qualification: 'MSc Psychology (UoP)',
      specialization: 'Mental Health Counselor',
      imageUrl: 'https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'John Smith',
      qualification: 'MD, FRCP',
      specialization: 'Cardiologist',
      imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Emily Chen',
      qualification: 'MBBS, DCH',
      specialization: 'Pediatrician',
      imageUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  constructor(private router: Router) {}

  viewDoctor(id: number) {
    this.router.navigate(['../p-doctor', id], { relativeTo: this.router.routerState.root.firstChild });
  }
}