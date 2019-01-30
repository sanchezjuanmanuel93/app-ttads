import { Component } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage {

  private match: any;

  constructor(
    private route: ActivatedRoute,
    private matchesService: MatchesService
  ) {

    this.getMatches();

  }

  getMatches() {
    let id_match = this.route.snapshot.paramMap.get('id');
    this.matchesService.getMatch(id_match).subscribe(match => {
      this.match = match;
    })
  }
}
