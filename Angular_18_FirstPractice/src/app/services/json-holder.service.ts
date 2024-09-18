import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonHolderService {

  private Api_Url='https://jsonplaceholder.org/';

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`${this.Api_Url}/posts`);
  }

  getUsers():Observable<any>{
    return this.http.get(`${this.Api_Url}/users`);
  }

  addPost(post:any):Observable<any>{
    return this.http.post(`${this.Api_Url}/posts`,post);
  }

  addUser(user:any):Observable<any>{
    return this.http.post(`${this.Api_Url}/users`,user);
  }
}
