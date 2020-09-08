import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HangmanComponent } from "./hangman/hangman.component";
import { SelectDomainComponent } from "./select-domain/select-domain.component";
import { EndScreenComponent } from "./end-screen/end-screen.component";

const routes: Routes = [
  { path: "hangman", component: HangmanComponent },
  { path: "hangman/:id", component: HangmanComponent },
  { path: "end/:state", component: EndScreenComponent },
  { path: "", component: SelectDomainComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
