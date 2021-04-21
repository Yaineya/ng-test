import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  title = "New component"
  fish = "Lorem ipsum dolor sit amet"
  valButton = "Нажми и название изменится "
  imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png'
  changeTitle() {
    if (this.title === "Ну вот ты поменял") {
      this.title = "Нажми и название изменится "
    } else {
      this.title = "Ну вот ты поменял"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
