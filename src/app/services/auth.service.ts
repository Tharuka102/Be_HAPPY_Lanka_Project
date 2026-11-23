import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // ✅ Email & Password Login
  login(credentials: { email: string; password: string }): Observable<any> {
    return new Observable(observer => {
      this.http.post<{ token: string }>(`${this.baseUrl}/login`, credentials).subscribe(
        response => {
          // ✅ Store JWT Token
          localStorage.setItem('token', response.token);

          // ✅ Redirect to Dashboard
          this.router.navigate(['/dashboard']);

          observer.next(response);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  // ✅ Google Login Redirect
  loginWithGoogle() {
    window.location.href = `${this.baseUrl}/google-login`;
  }

  // ✅ Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // ✅ Logout & Clear Token
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // ✅ Get Token (for Interceptor)
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ✅ Request password reset (sends email)
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot-password`, { email }); // Fixed
  }

  // ✅ Reset password using token
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, { token, newPassword }); // Fixed
  }

  // ✅ Patient registration
  register(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, formData);
  }


}
