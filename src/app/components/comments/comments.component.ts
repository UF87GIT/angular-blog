import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './../../services/comment/comment.service';
import { Comment } from './../../config/types';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  @Input() postId: number;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.getPostComments(this.postId)
      .subscribe((data: Comment[]) => this.comments = data);
  }

}
