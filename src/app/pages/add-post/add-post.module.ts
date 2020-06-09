import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';
import { HeaderComponent } from './../../components/header/header.component';
import { PostsComponent } from './../../components/posts/posts.component';
import { AddPostComponent } from './../../components/add-post/add-post.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddPostPage, 
    HeaderComponent,
    PostsComponent,
    AddPostComponent
  ]
})
export class AddPostPageModule {}
