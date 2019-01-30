import { Component } from '@angular/core';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage {

  private group: any;
  private teams: any;
  private matches: any;

  constructor(private groupsService: GroupsService) {
    /*this.groupsService.getGroup(param id).subscribe((group) => {
      this.group = group;
    })*/
    this.group = {
      name: "Group name",
    }

    this.teams = [
      {
        name: "team 1"
      },
      {
        name: "team 2"
      },
      {
        name: "team 3"
      },
    ];

    this.matches = [
      {
        id: 1,
        score1: 1,
        score2: 0,
        team1: {
          code: "A",
          name: "Argentina",
        },
        team2: {
          code: "B",
          name: "Brasil",
        }
      }
    ]

  }

}
