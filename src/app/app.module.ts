// import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//routing
import { AppRoutingModule } from "./app-routing.module";

//folder
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
// import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsModule } from './posts/posts.module';
// import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      PostsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
  constructor () {}
 }