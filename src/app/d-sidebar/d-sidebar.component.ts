import { Component, HostListener } from '@angular/core';
import { Doctor, DoctorService } from '../services/doctor.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-d-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="layout">
      <aside class="sidebar" [class.mobile-open]="isMobileMenuOpen">
        <div class="sidebar-header">
          <div class="doctor-profile">
            <img [src]="doctor?.profilePic" alt="Doctor profile" class="profile-image">
            <div class="doctor-info">
              <h3 class="doctor-name">{{ doctor?.name }}</h3>
              <p class="doctor-role">{{ doctor?.specialization }}</p>
            </div>
          </div>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="d-dashboard" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">📊</span>
            <span class="nav-label">Dashboard</span>
          </a>
          <a routerLink="d-profile" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">👤</span>
            <span class="nav-label">My Profile</span>
          </a>
          <a routerLink="d-requests" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">📝</span>
            <span class="nav-label">Requests</span>
          </a>
          <a routerLink="d-articles" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">📰</span>
            <span class="nav-label">Articles</span>
          </a>
          <a routerLink="d-schedule" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">📅</span>
            <span class="nav-label">Schedule</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <a routerLink="sign-out" class="nav-item sign-out">
            <span class="nav-icon">🚪</span>
            <span class="nav-label">Sign Out</span>
          </a>
        </div>
      </aside>

      <div class="main-content">
        <header class="top-bar">
          <button class="menu-toggle" (click)="toggleMobileMenu()">
            <span class="menu-icon">☰</span>
          </button>
        </header>
        
        <main class="content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [/* ✅ Keep your same styles, no change needed */ `
    .layout {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 280px;
      background: var(--primary-bg);
      display: flex;
      flex-direction: column;
      padding: var(--spacing-md);
      transition: transform 0.3s ease;
    }

    .sidebar-header {
      padding: var(--spacing-md) 0;
      margin-bottom: var(--spacing-lg);
    }

    .doctor-profile {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .profile-image {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .doctor-info {
      flex: 1;
    }

    .doctor-name {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .doctor-role {
      font-size: 12px;
      color: var(--text-secondary);
      margin: 0;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: var(--border-radius-md);
      color: var(--text-primary);
      text-decoration: none;
      transition: all 0.2s;
      gap: 12px;
    }

    .nav-item:hover {
      background: rgba(139, 92, 246, 0.1);
    }

    .nav-item.active {
      background: var(--primary-color);
      color: white;
    }

    .nav-icon {
      font-size: 20px;
    }

    .nav-label {
      font-size: 14px;
      font-weight: 500;
    }

    .sidebar-footer {
      margin-top: auto;
      padding-top: var(--spacing-lg);
    }

    .sign-out {
      color: var(--error-color);
    }

    .main-content {
      flex: 1;
      background: var(--background-light);
    }

    .top-bar {
      padding: var(--spacing-md);
      background: white;
      box-shadow: var(--shadow-sm);
      display: none;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--text-primary);
    }

    .content {
      padding: var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
        transform: translateX(-100%);
      }

      .sidebar.mobile-open {
        transform: translateX(0);
      }

      .top-bar {
        display: block;
      }

      .menu-toggle {
        display: block;
      }

      .content {
        padding: var(--spacing-md);
      }
    }
  `]
})
export class DSidebarComponent {
  doctor: Doctor | null = null;
  isMobileMenuOpen = false;
  isMobileView = window.innerWidth <= 768;

  constructor(private doctorService: DoctorService, private router: Router) {
    this.doctorService.getCurrentDoctor().subscribe(doctor => {
      this.doctor = doctor;
    });

    // Close menu on route change if in mobile view
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobileView && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileView = event.target.innerWidth <= 768;
    if (!this.isMobileView) {
      this.isMobileMenuOpen = false;
    }
  }
}
