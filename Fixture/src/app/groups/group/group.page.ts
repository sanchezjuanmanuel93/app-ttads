import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  group: any;

  constructor(
    private groupsService: GroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    let id = this.route.snapshot.paramMap.get('id');
    this.groupsService.getGroup(id).subscribe(group => {
      this.group = group;
    });
  }

}
