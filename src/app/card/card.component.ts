import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ['./card.module.scss'],
    interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {
    title: string = 'Карточка (  компонент )'
    text: string = 'Интерполяцию можно настроить, в декоратор передается массив с начальным и конечным значением синтаксиса interpolation: [`{{`, `}}`]'
    number: number = 42
    imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png'
    array = [1,1,2,3,5,8,13]
    obj = {
        name:'John',
        age: 100
    }
    disabled = true
    valButton = 'Заблокировано'

    ngOnInit(){
        setTimeout(()=>{
            this.imgUrl='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
            this.disabled = false
            this.valButton = 'Можно жать'
        },3000)
    }

    infoAboutMe(): string {
        return 'Info about me: '
    }
}