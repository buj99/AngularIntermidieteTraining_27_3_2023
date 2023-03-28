import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from '../pipes/suffix.pipe';
import { JokeDtailsRoutingModule } from './joke-details-routing.module';
import { JokeDetailsService } from './joke-details.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    JokeCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SuffixPipe,
    JokeDtailsRoutingModule,
    MatButtonModule
  ],
  providers: [JokeDetailsService],
  exports: [
    JokeCardComponent
  ]
})

export class JokeDetailsModule { }
