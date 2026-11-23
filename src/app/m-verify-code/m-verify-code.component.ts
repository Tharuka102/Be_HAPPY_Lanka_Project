import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './m-verify-code.component.html',
  styleUrl: './m-verify-code.component.css'
})
export class MVerifyCodeComponent {
  verifyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.verifyForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  get code() { return this.verifyForm.get('code'); }

  onSubmit() {
    if (this.verifyForm.valid) {
      // Here you would typically verify the code with your API
      console.log('Code submitted:', this.verifyForm.value);
      this.router.navigate(['/m-reset-password']);
    }
  }

  resendCode() {
    // Here you would implement the logic to resend the verification code
    console.log('Resending verification code...');
  }
}