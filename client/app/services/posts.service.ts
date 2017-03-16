import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/task/tasks')
      .map(res => res.json());
  }
  
   getOnePost(id) {
    return this.http.get('/task/task/'+id)
      .map(res => res.json());
  }
  
    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/task/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
	
}