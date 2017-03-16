import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {InvitationsComponent} from './components/invitations/invitations.component';
import {MaladiesComponent} from './components/maladies/maladies.component';
import {PostsComponent} from './components/posts/posts.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, TasksComponent, InvitationsComponent, MaladiesComponent, PostsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
