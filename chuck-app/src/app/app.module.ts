import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeDetailsModule } from './joke-details/joke-details.module';
import { MatCardModule } from '@angular/material/card';
import { JokeListComponent } from "./joke-list/joke-list.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        JokeDetailsModule,
        MatCardModule,
        JokeListComponent
    ]
})
export class AppModule { }
