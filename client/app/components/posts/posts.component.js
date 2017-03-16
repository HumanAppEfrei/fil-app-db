"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('../../services/task.service');
var PostsComponent = (function () {
    function PostsComponent(taskService) {
        this.taskService = taskService;
        // instantiate posts to an empty array
        this.posts = [];
        this.id = "58409d102abbe219869ee1b0";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.taskService.getOnePost(this.id).subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.detail = function (id) {
        var _this = this;
        this.taskService.getOnePost(id).subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.save = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            email: task.email,
            utilisateur: task.utilisateur,
            naissance: task.naissance,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
        location.reload();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PostsComponent.prototype, "posts", void 0);
    PostsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-posts',
            templateUrl: 'posts.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map