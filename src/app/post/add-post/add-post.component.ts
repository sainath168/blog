import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PostPayload} from "./post-payload";
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) {
    this.addPostForm = this.formBuilder.group({
      title: '',
      body: ''
    });

    this.postPayload = {
      id: '',
      username: '',
      title: '',
      content: ''
    }

  }

  ngOnInit(): void {
  }

  addPost() {
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postService.addPost(this.postPayload).subscribe(data => {
      console.log('added post');
      this.router.navigateByUrl('/home');
    }, error => {
      console.log('failed to add post');
    });
  }

}
