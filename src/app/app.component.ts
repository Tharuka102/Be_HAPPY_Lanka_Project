import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { MFooterComponent } from './m-footer/m-footer.component';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MNavbarComponent,MFooterComponent],
  template: `
    <app-m-navbar></app-m-navbar>
    <router-outlet></router-outlet>
    <app-m-footer></app-m-footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Be_HAPPY_Lanka_FRONT_END';
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {
    // Listen for route changes and scroll to the top
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart && isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0); // Only scroll when in browser environment
      }
    });
  }
}
