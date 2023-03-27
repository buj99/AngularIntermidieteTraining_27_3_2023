import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlithDirective } from '../highlith.directive';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule, HighlithDirective],
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  comments: string[] = [];
}
