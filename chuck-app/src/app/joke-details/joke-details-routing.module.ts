import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JokeCardComponent } from "./joke-card/joke-card.component";

const routes: Routes = [
    { path: 'card', component: JokeCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JokeDtailsRoutingModule { }