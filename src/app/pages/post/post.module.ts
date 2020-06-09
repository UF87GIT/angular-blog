import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageRoutingModule } from './post-routing.module';

import { PostPage } from './post.page';
import { HeaderComponent } from './../../components/header/header.component';
import { PostComponent } from './../../components/post/post.component';
import { CommentsComponent } from './../../components/comments/comments.component';
import { AddCommentComponent } from './../../components/add-comment/add-comment.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostPage, 
    HeaderComponent,
    PostComponent,
    CommentsComponent,
    AddCommentComponent
  ]
})
export class PostPageModule {}
