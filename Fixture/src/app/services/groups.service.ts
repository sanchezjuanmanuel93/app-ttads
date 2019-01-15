import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private url = environment.UrlApi + "group"
  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get(this.url);
  }
}
