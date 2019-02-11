import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = environment.UrlApi + "team";

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(this.url);
  }

  getTeam(id: any) {
    return this.http.get<Team>(this.url + "/" + id);
  }

  addPlayer(team: Team, player: any) {
    return this.http.put(this.url + "/" + team.id + "/players/" + player.id, {});
  }

  save(team: Team) {
    return this.http.post(this.url, team);
  }
}
