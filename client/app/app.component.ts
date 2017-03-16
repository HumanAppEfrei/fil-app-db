import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {TaskService} from './services/invitation.service';
import {TaskService} from './services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService]
})

export class AppComponent { }
