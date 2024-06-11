import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  breakpoint: number = 3;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const width = window.innerWidth;
    //this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    switch (true) {
      case width <= 650:
        this.breakpoint = 1;
        break;
      case width > 650 && width <= 800:
        this.breakpoint = 2;
        break;
      case width > 800 && width <= 1024:
        this.breakpoint = 3;
        break;
      default:
        this.breakpoint = 3;
        break;
    }
  }

  onResize(event: any): void {
    //this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
    const width = event.target.innerWidth;
    switch (true) {
      case width <= 600:
        this.breakpoint = 1;
        break;
      case width > 600 && width <= 800:
        this.breakpoint = 2;
        break;
      case width > 800 && width <= 1200:
        this.breakpoint = 2;
        break;
      default:
        this.breakpoint = 3;
        break;
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([`home/${path}`]).then();
  }

}
