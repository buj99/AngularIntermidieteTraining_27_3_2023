import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { delay, of } from "rxjs";
import { JokeCardComponent } from "./joke-card/joke-card.component";


function canActivateEmptyCardRoute() {
    return of(true).pipe(delay(3000));
}

const routes: Routes = [
    { path: 'card', component: JokeCardComponent, canActivate: [canActivateEmptyCardRoute] },
    { path: 'card/:id', component: JokeCardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JokeDtailsRoutingModule { }