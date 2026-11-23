
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
 templateUrl: './m-login.component.html',
  styleUrl: './m-login.component.css'
})
export class MLoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        // Updated pattern to be more flexible while still requiring letters and numbers
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)
      ]],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    
    setTimeout(() => {
      console.log('Login successful:', this.loginForm.value);
      this.loading = false;
      alert('Login successful!');
    }, 1000);
  }

  loginWithGoogle(): void {
    console.log('Google Login Initiated');
    alert('Google login not implemented yet.');
  }

  get f() { 
    return this.loginForm.controls; 
  }

  resetForm(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
}