import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/inicio']);
  }

  goToOnboarding() {
    this.router.navigate(['/onboarding']);
  }
}
