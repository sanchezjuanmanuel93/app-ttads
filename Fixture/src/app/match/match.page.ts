import { Component } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage {

  private team1: any;
  private team2: any;
  private goals1: any;
  private goals2: any;

  constructor() {
    this.team1 = {
      code: "A",
      name: "Argentina",
    };
    this.team2 = {
      code: "B",
      name: "Brasil",
    };

    this.goals1 = [
      {
        time: "87",
        player: {
          name: "PLAYER UNO"
        },
      },
    ];
    this.goals2 = [
      {
        time: "17",
        player: {
          name: "PLAYER TRES"
        },
      },
      {
        time: "87",
        player: {
          name: "PLAYER DOS"
        },
      },
    ];
  }

}
