import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    

    getMaladies(){
        return this.http.get('maladie/tasks/')
            .map(res => res.json());
    }
    
    getUser(idUser){
        return this.http.get('user/task/'+idUser)
            .map(res => res.json());
    }
    getResearched(pseudo){
        return this.http.get('/task/pseudo/'+pseudo)
            .map(res => res.json());
    }

    getUserByPseudo(pseudo){
        return this.http.get('user/task/'+pseudo)
            .map(res => res.json());
    }

    getFriends(idUser){
        return this.http.get('friend/task/'+idUser)
            .map(res => res.json());
    }

    deleteFriend(id){
        return this.http.delete('friend/task/'+id)
            .map(res => res.json());
    }
    

    getUsers(){
        return this.http.get('user/tasks')
            .map(res => res.json());
    }

    
    getInvitations(idUser){
        return this.http.get('invitation/task/'+idUser)
            .map(res => res.json());
    }

    addInvitation(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/invitation/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteInvitation(id){
        return this.http.delete('/invitation/task/'+id)
            .map(res => res.json());
    }
    
    updateInvitationStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/invitation/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

    addFollower(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/friend/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }



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