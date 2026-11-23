import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-m-register-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-register-choice.component.html',
  styleUrl: './m-register-choice.component.css'
})
export class MRegisterChoiceComponent {
constructor(private router: Router) {}

 // navigateToRegister(type: 'm-register-counselor' | 'm-register-patient') {
  //  this.router.navigate([`${type}`]);
 // }

  navigateToRegister(type: 'd-sidebar' | 'p-sidebar') {
    this.router.navigate([`${type}`]);
  }
}
