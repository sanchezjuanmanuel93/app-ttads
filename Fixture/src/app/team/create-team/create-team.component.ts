import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  name: string = "";
  code: string = "";

  @Output("addTeam") addTeam: EventEmitter<Team> = new EventEmitter();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  save() {
    let team = new Team({ name: this.name, code: this.code });
    this.teamService.save(team).subscribe((_team: Team) => {
      console.log(_team);

      this.addTeam.emit(_team);
      this.name = "";
      this.code = "";
    }, (error) => {
      console.log(error);
    });
  }

}
