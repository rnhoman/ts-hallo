import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsListsComponent } from './posts/posts-lists/posts-lists.component';
import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';
import { PostsAddComponent } from './posts/posts-add/posts-add.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      pageTitle: 'Home'
    }
  },
  {
    path: 'posts-detail',
    component: PostsDetailsComponent,
    data: {
      pageTitle: 'Post Detail'
    }
  },
  {
    path: 'posts-add',
    // loadChildren: './posts/posts.module#PostsModule',
    component: PostsAddComponent,
    data: {
      pageTitle: 'Post Add'
      // preload: true
    }
  },
  // {
  //   path: 'posts-add/:id',
  //   redirectTo: '/posts/posts-add',
  //   data: {
  //     pageTitle: 'Posts Add'
  //   }
  // },
  {
    path: 'posts',
    // loadChildren: './posts/posts.module#PostsModule',
    component: PostsListsComponent,
    data: {
      pageTitle: 'Posts Lists'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  // declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }