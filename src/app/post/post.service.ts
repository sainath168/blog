import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostPayload} from "./add-post/post-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {

  }

  addPost(postPayload: PostPayload) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8080/api/posts/all');
  }

  getPost(id: Number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + id);
  }

}
