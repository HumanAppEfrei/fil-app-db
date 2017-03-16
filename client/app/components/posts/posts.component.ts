import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html'
})
export class PostsComponent implements OnInit {
	 // instantiate posts to an empty array
	@Input()
	posts: any = [];
	id: string ="58409d102abbe219869ee1b0";

	constructor(private taskService: TaskService) { }

	ngOnInit() {
		// Retrieve posts from the API
		this.taskService.getOnePost(this.id).subscribe(posts => {
			this.posts = posts;
		});
	}
	
	detail(id){
		this.taskService.getOnePost(id).subscribe(posts => {
			this.posts = posts;
		});
	}
	
	save(task){
		var _task = {
            _id:task._id,
            title: task.title,
			email: task.email,
			utilisateur: task.utilisateur,
			naissance: task.naissance,
            isDone: !task.isDone
        };
        
		
		
        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
		location.reload();
	}

}
