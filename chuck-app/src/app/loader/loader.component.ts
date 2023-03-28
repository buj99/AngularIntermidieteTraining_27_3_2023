import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading = false;

  constructor(private readonly router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if(event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }
}
