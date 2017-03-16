import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'maladies',
  templateUrl: 'maladies.component.html'
})

export class MaladiesComponent { 
    maladies: Maladie[];
    user: any;
    
    title: string;
    idUser: number;
    idUser = 2;


    getMaladies(){
        this.taskService.getMaladies()
            .subscribe(maladies => {
                this.maladies = maladies;
            });
    }

    constructor(){
        this.taskService.getUser(this.idUser)
        .subscribe(user => {
            this.user = user;
            consol.log("[TEST] "+this.user);
        });
    }
    
}
