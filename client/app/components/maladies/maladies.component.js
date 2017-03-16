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
var MaladiesComponent = (function () {
    function MaladiesComponent() {
        var _this = this;
        this.idUser = 2;
        this.taskService.getUser(this.idUser)
            .subscribe(function (user) {
            _this.user = user;
            consol.log("[TEST] " + _this.user);
        });
    }
    MaladiesComponent.prototype.getMaladies = function () {
        var _this = this;
        this.taskService.getMaladies()
            .subscribe(function (maladies) {
            _this.maladies = maladies;
        });
    };
    MaladiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'maladies',
            templateUrl: 'maladies.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MaladiesComponent);
    return MaladiesComponent;
}());
exports.MaladiesComponent = MaladiesComponent;
//# sourceMappingURL=maladies.component.js.map