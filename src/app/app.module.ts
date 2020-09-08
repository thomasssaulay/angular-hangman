import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HangmanComponent } from "./hangman/hangman.component";
import { SelectDomainComponent } from "./select-domain/select-domain.component";
import { EndScreenComponent } from "./end-screen/end-screen.component";
import { HangmanService } from "./services/hangman.service";

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    SelectDomainComponent,
    EndScreenComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HangmanService],
  bootstrap: [AppComponent]
})
export class AppModule {}
