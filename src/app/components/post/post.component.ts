import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PostService } from './../../services/post/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  postId: number;
  post: any = {};
  commentBoxOpened: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id'];

    this.postService.getPost(this.postId)
      .subscribe((data: any) => this.post = data);
  }
}
