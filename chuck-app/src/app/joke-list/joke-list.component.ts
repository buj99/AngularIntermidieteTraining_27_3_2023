import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlithDirective } from '../highlith.directive';
import { JokesFormComponent } from '../jokes-form/jokes-form.component';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule, HighlithDirective, JokesFormComponent],
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  comments: string[] = [];
}
