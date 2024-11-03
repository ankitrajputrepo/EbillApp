import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ConsumerResponse {
  email: string;
  role: string; // Ensure this matches your API response structure
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  markAsTouched(controlName: string): void {
    const control = this.loginForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.http.post<ConsumerResponse>('http://localhost:5112/api/Consumers/login', { email, password })
        .subscribe({
          next: (response: ConsumerResponse) => {
            // Handle successful login response
            sessionStorage.setItem('user', JSON.stringify(response));
            
            // Check if the user is an admin and navigate accordingly
            if (response.role === 'admin') {
              this.router.navigate(['/admin']); // Navigate to the admin component
            } else {
              this.router.navigate(['/user']); // Navigate to the user component
            }
          },
          error: (err: HttpErrorResponse) => {
            // Handle error response
            console.error('Login error', err);
            console.log('Invalid email or password');
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
