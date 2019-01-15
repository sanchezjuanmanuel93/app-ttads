import { Component } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import { log } from 'util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private groups: any;

  constructor(private groupsService: GroupsService) {
    this.groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
      console.log(groups);
    })
  }
}
