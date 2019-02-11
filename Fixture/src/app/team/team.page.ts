import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  team: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    let id = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe((team: Team) => {
      this.team = team;
    });
  }

  addPlayer(player: Player) {
    this.teamService.addPlayer(this.team, player).subscribe((_team: Team) => {
      this.team.players.push(player);
    }, error => {
      console.log(error);
    })
  }
}
