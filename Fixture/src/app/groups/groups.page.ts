import { Component } from '@angular/core';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage {

  private groups: any;

  constructor(private groupsService: GroupsService) {
    /*this.groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
    })*/

    this.groups = [
      {
        name: "Grupo A"
      },
      {
        name: "Grupo B"
      },
      {
        name: "Grupo C"
      },
      {
        name: "Grupo D"
      },
      {
        name: "Grupo E"
      },
    ]
  }

}
