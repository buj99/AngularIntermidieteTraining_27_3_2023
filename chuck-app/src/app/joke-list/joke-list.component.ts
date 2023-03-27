import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  comments: string[] = ['comm1', 'comm2', 'comm3'];
}
