import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-domain",
  templateUrl: "./select-domain.component.html",
  styleUrls: ["./select-domain.component.css"]
})
export class SelectDomainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToGameScreen(state: string) {
    setTimeout(() => {
      this.router.navigate(["/hangman", state]);
    }, 0);
  }
}
