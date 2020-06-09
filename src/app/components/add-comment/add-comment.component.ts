import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from './../../services/comment/comment.service';
import { Comment } from './../../config/types';

@Component({
  selector: 'app-add-comment-component',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {

  commentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    body: ['', Validators.required],
  });

  @Input() postId: number;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.commentService.addPostComment(this.postId, this.commentForm.value)
      .subscribe((data: Comment) => console.log('addPostComment result', data));
  }

}
