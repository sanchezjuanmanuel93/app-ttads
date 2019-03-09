import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url = `${environment.UrlApi}/player`;


  constructor(private http: HttpClient) { }


  save(player: Player) {
    return this.http.post(this.url, player);
  }
}
