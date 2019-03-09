import { Component } from '@angular/core';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage {

  groups: any;

  constructor (public groupsService: GroupsService) {
    this.getGroups();
  }

  getGroups() {
    this.groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  addGroup(group) {
    this.groups.push(group);
  }
}
