import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-counselor-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './m-register-counselor.component.html',
  styleUrl: './m-register-counselor.component.css'
})
export class MRegisterCounselorComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  genderOptions = ['Male', 'Female', 'Other'];
  specializationOptions = [
    'Marriage Counseling',
    'Depression Counseling',
    'Anxiety Counseling',
    'Career Counseling',
    'Relationship Counseling'
  ];
  selectedFiles: File[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      nic: ['', [Validators.required, Validators.pattern('^[0-9]{9}[vVxX]$|^[0-9]{12}$')]],
      address: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(100)]],
      gender: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^(?:\\+94|0)?[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', [Validators.required]],
      experience: ['', [Validators.required, Validators.min(0), Validators.max(60)]],
      qualification: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      availability: this.formBuilder.group({
        monday: [false],
        tuesday: [false],
        wednesday: [false],
        thursday: [false],
        friday: [false],
        saturday: [false],
        sunday: [false]
      }),
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
    return null;
  }

  get f() { return this.registerForm.controls; }

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

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Check if at least one day is selected
    const availability = this.registerForm.get('availability')?.value;
    if (!Object.values(availability).some(day => day)) {
      alert('Please select at least one day of availability');
      return;
    }

    const counselorData = {
      ...this.registerForm.value,
      files: this.selectedFiles
    };

    // Store in localStorage (temporary solution)
    const localCounselors = localStorage.getItem('counselors');
    if (localCounselors) {
      const counselors = JSON.parse(localCounselors);
      counselors.push(counselorData);
      localStorage.setItem('counselors', JSON.stringify(counselors));
    } else {
      localStorage.setItem('counselors', JSON.stringify([counselorData]));
    }

    alert('Registration Success');
    this.registerForm.reset();
    this.submitted = false;
    this.selectedFiles = [];
  }
}
