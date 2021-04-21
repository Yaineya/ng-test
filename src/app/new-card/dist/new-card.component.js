"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewCardComponent = void 0;
var core_1 = require("@angular/core");
var NewCardComponent = /** @class */ (function () {
    function NewCardComponent() {
        this.title = "New component";
        this.fish = "Lorem ipsum dolor sit amet";
        this.valButton = "Нажми и название изменится ";
        this.imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png';
    }
    NewCardComponent.prototype.changeTitle = function () {
        if (this.title === "Ну вот ты поменял") {
            this.title = "Нажми и название изменится ";
        }
        else {
            this.title = "Ну вот ты поменял";
        }
    };
    NewCardComponent.prototype.ngOnInit = function () {
    };
    NewCardComponent = __decorate([
        core_1.Component({
            selector: 'app-new-card',
            templateUrl: './new-card.component.html',
            styleUrls: ['./new-card.component.scss']
        })
    ], NewCardComponent);
    return NewCardComponent;
}());
exports.NewCardComponent = NewCardComponent;
