import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Joke } from '../models/joke.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private readonly dataService: DataService) {}
  ngOnDestroy(): void {
    this.$subs.forEach((sub) => sub.unsubscribe());
  }
  categories: string[] = [];
  $subs: Subscription[] = [];
  ngOnInit(): void {
    this.$subs.push(
      this.dataService.getAllCategories().subscribe((data: string[]) => {
        this.categories.push(...data);
      })
    );
  }

  getJokesFrom(category: string) {
    this.$subs.push(
      this.dataService
        .getJokesByCategory(category)
        .subscribe((jokes: Joke[]) => {
          console.log(jokes);
        })
    );
  }
}
