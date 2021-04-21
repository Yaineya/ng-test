"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.title = 'Карточка (  компонент )';
        this.text = 'Интерполяцию можно настроить, в декоратор передается массив с начальным и конечным значением синтаксиса interpolation: [`{{`, `}}`]';
        this.number = 42;
        this.imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png';
        this.array = [1, 1, 2, 3, 5, 8, 13];
        this.obj = {
            name: 'John',
            age: 100
        };
        this.disabled = true;
        this.valButton = 'Заблокировано';
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.imgUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
            _this.disabled = false;
            _this.valButton = 'Можно жать';
        }, 3000);
    };
    CardComponent.prototype.infoAboutMe = function () {
        return 'Info about me: ';
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: "app-card",
            templateUrl: "./card.component.html",
            styleUrls: ['./card.module.scss'],
            interpolation: ['{{', '}}']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
