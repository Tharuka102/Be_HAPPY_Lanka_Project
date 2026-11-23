import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './m-home.component.html',
  styleUrl: './m-home.component.css'
})
export class MHomeComponent {
  services = [
    {
      title: 'Mental Health',
      description: 'Professional counseling and mental wellness programs',
      icon: '🧠'
    },
    {
      title: 'Physical Wellness',
      description: 'Expert guidance for physical health and fitness',
      icon: '💪'
    },
    {
      title: 'Nutrition Advice',
      description: 'Personalized nutrition plans and dietary guidance',
      icon: '🥗'
    },
    {
      title: 'Meditation',
      description: 'Guided meditation and mindfulness sessions',
      icon: '🧘'
    }
  ];

  testimonials = [
    {
      name: 'Sarah M.',
      text: 'Be Happy Lanka transformed my approach to mental wellness.',
      rating: 5
    },
    {
      name: 'John D.',
      text: 'The nutrition guidance helped me achieve my health goals.',
      rating: 5
    },
    {
      name: 'Lisa R.',
      text: 'Professional and caring staff who truly understand wellness.',
      rating: 5
    }
  ];
}