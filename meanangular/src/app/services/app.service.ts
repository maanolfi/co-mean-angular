import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:9000/'

  constructor(private http: HttpClient) { }

 fecthAll(): Observable<Post[]> {
   return this.http.get(`${this.url}/posts`).map(res => res.json().posts)
 }

 fecth(slug): Observable<Post> {
  return this.http.get(`${this.url}/posts/${slug}`).map(res => res.json().post)
 }

  save(title: string, body: string): Observable<Post> {
    const data = JSON.stringify({ title, body})
    let headers = new HttpHeaders()
    headers.append('Content-type', 'application/json');
    const options = { headers }
    
    return this.http.post(`${this.url}/posts`, data, options).map(result => console.log(result))
  }

}
