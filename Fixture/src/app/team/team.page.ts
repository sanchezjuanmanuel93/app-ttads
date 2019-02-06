import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage {

  team: any;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {

    this.getGroups();

  }

  getGroups() {
    let id = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe(team => {
      this.team = team;
    });
  }

}
