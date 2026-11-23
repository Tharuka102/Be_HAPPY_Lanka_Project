import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
 templateUrl: './m-reset-email.component.html',
  styleUrl: './m-reset-email.component.css'
})
export class MResetEmailComponent {
  emailForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() { return this.emailForm.get('email'); }

  onSubmit() {
    if (this.emailForm.invalid) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    // Simulating an API call for email submission
    setTimeout(() => {
      // Replace with actual API call to send the verification code
      console.log('Email submitted:', this.emailForm.value);
      this.router.navigate(['/m-verify-code']);
      this.isLoading = false;
    }, 2000); // Simulate network delay
  }
}
