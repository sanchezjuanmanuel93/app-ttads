import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Group } from '../models/group';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private url = environment.UrlApi + "group";

  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get(this.url);
  }

  getGroup(id: any) {
    return this.http.get<Group>(this.url + "/" + id);
  }

  save(group: Group) {
    return this.http.post(this.url, group);
  }

  addTeamToGroup(group: Group, team: Team) {
    return this.http.put(this.url + "/" + group.id + "/teams/" + team.id, {});
  }

}
