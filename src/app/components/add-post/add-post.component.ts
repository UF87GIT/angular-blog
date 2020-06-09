import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from './../../services/post/post.service';
import { Post } from './../../config/types';

@Component({
  selector: 'app-add-post-component',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {

  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.postService.addPost(this.postForm.value)
      .subscribe((data: Post) => console.log('addPost result', data));
  }

}
