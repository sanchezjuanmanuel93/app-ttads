import { Component } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage {

  group: any;

  constructor(
    private groupsService: GroupsService,
    private route: ActivatedRoute
  ) {

    this.getGroups();

  }

  getGroups() {
    let id = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(id).subscribe(group => {
      this.group = group;
    });
  }

}
