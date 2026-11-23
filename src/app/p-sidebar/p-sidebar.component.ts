import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Doctor, DoctorService } from '../services/doctor.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-p-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
  <div class="layout">
    <aside class="sidebar" [class.mobile-open]="isMobileMenuOpen">
      <div class="sidebar-header">
        <div class="profile">
          <div class="profile-pic-container">
            <img [src]="profilePicUrl" alt="Patient Icon" class="profile-pic" />
          </div>
          <h3>A.b.C. Perera<br><span>Patient</span></h3>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a routerLink="p-dashboard" routerLinkActive="active" class="nav-item">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </a>
        <a routerLink="p-profile" routerLinkActive="active" class="nav-item">
          <span class="nav-icon">👤</span>
          <span class="nav-label">My Profile</span>
        </a>
        <a routerLink="p-request" routerLinkActive="active" class="nav-item">
          <span class="nav-icon">📝</span>
          <span class="nav-label">Requests</span>
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
  styles: [`
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

.profile {
  margin: 30px 0;
  padding: 20px;
}

.profile-pic-container {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  padding: 5px;
}

.profile-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.profile h3 {
  color: #4a148c;
  font-size: 22px;
  margin: 10px 0 5px;
  font-weight: 600;
  text-align: center;
}

.profile h3 span {
  font-size: 16px;
  color: #7b1fa2;
  font-weight: 500;
  display: block;
  margin-top: 5px;
  text-align: center;
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
export class PSidebarComponent {
  doctor: Doctor | null = null;
  isMobileMenuOpen = false;
  isMobileView = window.innerWidth <= 768;
  profilePicUrl: string = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150';

  constructor(private doctorService: DoctorService, private router: Router) {
    this.doctorService.getCurrentDoctor().subscribe(doctor => {
      this.doctor = doctor;
    });

    // Auto-close sidebar on route change (only on mobile)
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
