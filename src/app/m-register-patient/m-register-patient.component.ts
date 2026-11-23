import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './m-register-patient.component.html',
  styleUrl: './m-register-patient.component.css'
})
export class MRegisterPatientComponent implements OnInit {
  selectedFiles: File[] = [];
  registerForm!: FormGroup;
  submitted = false;
  genderOptions = ['Male', 'Female', 'Other'];


  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  
  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      this.selectedFiles = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.type)) {
          alert('Please upload only PDF or Word documents');
          return;
        }

        if (file.size > maxSize) {
          alert('File size should not exceed 5MB');
          return;
        }

        this.selectedFiles.push(file);
      }
    }
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      nic: ['', [Validators.required, Validators.pattern('^[0-9]{9}[vVxX]$|^[0-9]{12}$')]],
      address: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(120)]],
      gender: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      fg.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const userData = {
      ...this.registerForm.value
    };

    const localUser = localStorage.getItem('angular18users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(userData);
      localStorage.setItem('angular18users', JSON.stringify(users));
    } else {
      const users = [userData];
      localStorage.setItem('angular18users', JSON.stringify(users));
    }

    alert('Registration Success');
    this.registerForm.reset();
    this.submitted = false;
  }
}
