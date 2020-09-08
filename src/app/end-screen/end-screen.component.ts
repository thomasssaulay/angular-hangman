import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-end-screen",
  templateUrl: "./end-screen.component.html",
  styleUrls: ["./end-screen.component.css"]
})
export class EndScreenComponent implements OnInit {
  state: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.state = this.route.snapshot.params["state"];
  }

  goToSelectScreen(delay: number = 3000) {
    setTimeout(() => {
      this.router.navigate([""]);
    }, delay);
  }
}
