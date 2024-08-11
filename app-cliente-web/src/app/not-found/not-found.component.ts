import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.redirectToHome();
  }

  redirectToHome() {
    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 5000);
  }
}
