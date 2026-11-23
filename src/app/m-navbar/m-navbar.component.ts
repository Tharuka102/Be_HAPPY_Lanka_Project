import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  route: string;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-m-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './m-navbar.component.html',
  styleUrl: './m-navbar.component.css'
})
export class MNavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  menuItems: MenuItem[] = [
    { route: '/m-about', icon: '🎯', text: 'About' },
    { route: '/m-contact', icon: '💌', text: 'Contact' },
    { route: '/m-article', icon: '📚', text: 'Articles' },
    { route: '/m-newsfeed', icon: '📰', text: 'News' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}