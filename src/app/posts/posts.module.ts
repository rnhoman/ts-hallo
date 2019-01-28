import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forChild(
      [
        // {
        //   path: 'posts',
        //   redirectTo: '/posts/posts-add'
        //   // path: 'posts-add',
        //   // component: PostsAddComponent,
        // },
        // {
        //   path: 'posts-add/:id',
        //   component: PostsAddComponent,
        //   data: {
        //     pageTitle: 'Post Add'
        //   }
        // }
      ]
    )
  ],
  declarations: [PostsListsComponent, PostsDetailsComponent, PostsAddComponent]
})
export class PostsModule { }