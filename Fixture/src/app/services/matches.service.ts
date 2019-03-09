import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private url = `${environment.UrlApi}/match`;


  constructor(private http: HttpClient) {

  }

  getMatch(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }


}
