import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  name: string = "";

  @Output("addGroup") addGroup: EventEmitter<Group> = new EventEmitter();

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
  }

  save() {
    let group = new Group({ name: this.name });
    this.groupService.save(group).subscribe((_group: Group) => {
      this.addGroup.emit(_group);
      this.name = "";
    }, (error) => {
      console.log(error);
    });
  }

}
