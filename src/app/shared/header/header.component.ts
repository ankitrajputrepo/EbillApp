import { CommonModule, isPlatformBrowser, UpperCasePipe } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!sessionStorage.getItem('user');
    }
    return false;
  }

  isAdmin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem('user') || '{}');
      return user.role === 'admin'; // Check if the user role is admin
    }
    return false;
  }

  getUserEmail(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const user = sessionStorage.getItem('user');
      return user ? JSON.parse(user).email : null; // Parse email from user data
    }
    return null;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('user');
      this.router.navigate(['login']);
    }
  }}
