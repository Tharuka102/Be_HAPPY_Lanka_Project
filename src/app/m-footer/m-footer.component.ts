import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  text: string;
  url: string;
  icon: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-m-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './m-footer.component.html',
  styleUrl: './m-footer.component.css'
})
export class MFooterComponent {
  footerLinks: FooterLink[] = [
    { text: 'Privacy Policy', url: '/privacy', icon: '🔒' },
    { text: 'Terms & Service', url: '/terms', icon: '📜' },
    { text: 'Cookies Settings', url: '/cookies', icon: '🍪' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'ƒ' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' }
  ];
}