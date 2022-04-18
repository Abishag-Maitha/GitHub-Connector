import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {
username="Abishag-Maitha"
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    const url=`https://api.github.com/users/${this.username}`
    return this.http.get<any>(url)
    
  }
}
