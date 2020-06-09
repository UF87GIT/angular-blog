import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post/post.service';
import { Post } from './../../config/types';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  postBoxOpened: boolean = false;

  constructor(
    private postService: PostService,
    public plt: Platform
  ) { }

  ngOnInit() {
    if (this.plt.is('cordova')) {
      this.plt.ready().then(() => this.loadPosts());
    } else {
      this.loadPosts();
    }
  }

  private loadPosts() {
    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }
}
