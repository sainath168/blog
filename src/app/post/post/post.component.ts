import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";
import {PostPayload} from "../add-post/post-payload";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postIdParam: Number;
  post: PostPayload;

  constructor(private postService: PostService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.postIdParam = params['id'];
    });

    this.postService.getPost(this.postIdParam).subscribe(data => {
      this.post.title = data.title;
      this.post.content = data.content;
      this.post.username = data.username;
    });

  }

}
