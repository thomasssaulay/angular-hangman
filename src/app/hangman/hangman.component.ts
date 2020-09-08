import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HangmanService } from "../services/hangman.service";
import "hammerjs";
import { _ } from "underscore";

@Component({
  selector: "app-hangman",
  templateUrl: "./hangman.component.html",
  styleUrls: ["./hangman.component.css"]
})
export class HangmanComponent implements OnInit {
  title: string = "Quel est ce métier ?";

  currentDomain;
  selectedDomain: number = 1;
  missesAllowed: number = 6;
  timer: number;
  timerDisplay: string;
  srcLife: string;
  secretWord: object;
  hint: string;
  letters: any[];
  numMisses: number;
  win: boolean;
  lost: boolean;
  lifeMeter: any[];
  timerInterval: any;
  shakeAnim: boolean;
  shakeTimer: boolean;
  showHint: boolean;

  constructor(
    private hangmanService: HangmanService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getRandomIndex(words: []) {
    const index = Math.floor(Math.random() * words.length);

    return index;
  }
  getFromTheList(words: [], index: number) {
    return words[index];
  }

  makeLifeMeter(nLife: number) {
    this.srcLife = "./assets/img/domain" + this.currentDomain.id + ".png";

    const out = [];
    for (let i = 0; i < nLife; i++) {
      out.push({ index: i, desactivate: false });
    }
    return out;
  }

  stopTimer() {
    if (typeof this.timerInterval !== "undefined")
      clearInterval(this.timerInterval);
    this.timerDisplay = "00";
  }

  makeLetters(word: string) {
    //     retourne un tableau de couples lettre/etat découvert ou non
    return _.map(word.split(""), character => {
      var out = {};
      //       cas particulier des tirets et des espaces
      if (character === "-" || character === " ") {
        out = { name: character, chosen: true, spaced: true };
      } else {
        out = { name: character, chosen: false, spaced: false };
      }
      return out;
    });
  }

  revealSecret() {
    //     dévoile le mot secret
    _.each(this.secretWord, letter => {
      letter.chosen = true;
    });
  }

  revealRandomLetters(nLetters: number = 1) {
    // revele une ou plusieurs lettre a l'affichage du mot
    var wordSize = Object.keys(this.secretWord).length;
    var rnd = Math.floor(Math.random() * wordSize);
    this.try(this.secretWord[rnd]);
    return this.secretWord[rnd];
  }

  checkForEndOfGame() {
    //     condition de victoire si toutes lettres découvertes
    //     acc est la somme logique , demarre a true
    this.win = _.reduce(
      this.secretWord,
      function(acc, letter) {
        return acc && letter.chosen;
      },
      true
    );
    if (this.win) {
      this.goToEndScreen("win");
    }

    //     condition de defaite lorsque plus d'essais
    if (!this.win && this.numMisses === this.missesAllowed) {
      this.lost = true;
      this.revealSecret();
      this.goToEndScreen("lost");
    }
  }

  reset() {
    const ind = this.getRandomIndex(this.currentDomain.metiers);
    this.secretWord = this.makeLetters(
      this.getFromTheList(this.currentDomain.metiers, ind)
    );
    this.hint = this.getFromTheList(this.currentDomain.hint, ind);
    console.log(this.hint);

    const x = this.revealRandomLetters();
    _.each(this.letters, letter => {
      if (letter.name === x.name) {
        letter.chosen = true;
      } else {
        letter.chosen = false;
      }
    });
    _.each(this.lifeMeter, life => {
      life.desactivate = false;
    });
    this.numMisses = 0;
    this.showHint = false;
    this.win = false;
    this.lost = false;
    this.shakeTimer = false;
    this.timer = 60;
    this.timerDisplay = "" + this.timer;
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.timer >= 0) {
        this.timer--;
        if (this.timer < 10) {
          this.timerDisplay = "0" + this.timer;
          this.shakeTimer = true;
        } else {
          this.timerDisplay = "" + this.timer;
        }
      }
      //     condition de défaite avec timer
      if (!this.win && this.timer < 0) {
        this.lost = true;
        this.shakeTimer = false;
        this.revealSecret();
        this.stopTimer();
        this.goToEndScreen("timeout");
      }
    }, 1000);
  }

  try = function(guess) {
    if (!this.win && !this.lost) {
      guess.chosen = true;
      var found = false;
      _.each(this.secretWord, letter => {
        //       condition lettre valide, avec gestion des accents -- a simplfier
        if (
          guess.name.toUpperCase() === letter.name.toUpperCase() ||
          (guess.name.toUpperCase() === "E" &&
            letter.name.toUpperCase() === "É") ||
          (guess.name.toUpperCase() === "E" &&
            letter.name.toUpperCase() === "È") ||
          (guess.name.toUpperCase() === "E" &&
            letter.name.toUpperCase() === "Ê") ||
          (guess.name.toUpperCase() === "E" &&
            letter.name.toUpperCase() === "Ë") ||
          (guess.name.toUpperCase() === "A" &&
            letter.name.toUpperCase() === "Â") ||
          (guess.name.toUpperCase() === "I" &&
            letter.name.toUpperCase() === "Ï") ||
          (guess.name.toUpperCase() === "I" &&
            letter.name.toUpperCase() === "Î") ||
          (guess.name.toUpperCase() === "O" &&
            letter.name.toUpperCase() === "Ô")
        ) {
          letter.chosen = true;
          found = true;
        }
      });
      //     mauvaise lettre
      if (!found && this.numMisses <= this.missesAllowed) {
        this.lifeMeter[
          this.missesAllowed - this.numMisses - 1
        ].desactivate = true;
        this.numMisses++;
        console.log(this.numMisses);
        if (this.numMisses >= 3) {
          this.showHint = true;
        }
        this.shakeAnim = true;
        // window.setTimeout(() => (this.shakeAnim = false), 5000);
      }
      this.checkForEndOfGame();
    }
  };

  goToEndScreen(state: string, delay: number = 2000) {
    this.stopTimer();
    setTimeout(() => {
      this.router.navigate(["/end", state]);
    }, delay);
  }
  goToSelectScreen(delay: number = 2000) {
    this.stopTimer();
    setTimeout(() => {
      this.router.navigate([""]);
    }, delay);
  }

  public ngOnInit() {
    this.selectedDomain = this.route.snapshot.params["id"];
    this.currentDomain = this.hangmanService.domainList[this.selectedDomain];

    this.letters = this.makeLetters("azertyuiopqsdfghjklmwxcvbn");
    this.lifeMeter = this.makeLifeMeter(this.missesAllowed);
    this.reset();
  }
}
