import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'invitations',
  templateUrl: 'invitations.component.html'
})

export class InvitationsComponent { 
    tasks: Task[];
    users: User[];
    friends: Friend[];
    title: string;
    idUser: number;
    researched: any;
    idUser = 2;
    areMyInvitaionsSelected: boolean = false;
    areMyFriendsSelected: boolean = false;

    showHideInvitation() {
        this.areMyInvitaionsSelected = !this.areMyInvitaionsSelected;
        console.log("hey");
    }

    
    showHideFriend() {
        areMyFriendsSelected = !areMyFriendsSelected;
        console.log("hey");
    }


    getResearched(pseudo){
        this.taskService.getResearched(pseudo)
            .subscribe(researched => {
                this.researched = researched;
                console.log(this.researched);
            });
    }

    getUsers(){
        this.taskService.getUsers()
            .subscribe(users => {
                this.users = users;
                console.log(this.users);
            });
    }

    getFriends(){
        this.taskService.getFriends(this.idUser)
            .subscribe(friends => {
                this.friends = friends;
                console.log(this.friends);
            });
    }

    deleteFriend(id){
        var tasks = this.tasks;
        
        this.taskService.deleteFriend(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }

    constructor(private taskService:TaskService){
        this.taskService.getInvitations(this.idUser)
            .subscribe(tasks => {
                this.tasks = tasks;
            });

    }

    addInvitation(event){
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        }
        
        this.taskService.addInvitation(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }
    
    deleteInvitation(id){
        var tasks = this.tasks;
        
        this.taskService.deleteInvitation(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateInvitationStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };
        
        this.taskService.updateInvitationStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }



    
}
