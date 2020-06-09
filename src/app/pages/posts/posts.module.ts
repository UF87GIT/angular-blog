import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';
import { HeaderComponent } from './../../components/header/header.component';
import { PostsComponent } from './../../components/posts/posts.component';
import { AddPostComponent } from './../../components/add-post/add-post.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostsPage, 
    HeaderComponent,
    PostsComponent,
    AddPostComponent
  ],
})
export class PostsPageModule {}
