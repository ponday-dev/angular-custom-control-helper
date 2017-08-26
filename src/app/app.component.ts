import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string;
  date: Date;

  onClickShowText() {
    console.log(this.text);
  }
  onClickShowDate() {
    console.log(this.date);
  }
}
