import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';
import { Team } from 'src/app/models/team';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage {

  group: Group;

  constructor (public groupsService: GroupsService, public route: ActivatedRoute) {
    this.getGroup();
  }

  getGroup() {
    let id = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(id).subscribe((group: Group) => {
      this.group = group;
    });
  }

  addTeam(team: Team) {
    console.log(team);

    this.groupsService.addTeamToGroup(this.group, team).subscribe((_group: Group) => {
      this.group.teams.push(team);
    }, (error) => {
      console.log(error);
    })
  }

}
