import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  msg=''
  products=[
    {
      name:'dentifrice',
      price:6,
      quantity:3
    },
    {
      name:'brosse a dent',
      price:54,
      quantity:30
    },
    {
      name:'cure dent',
      price:66,
      quantity:13
    },
  ]
}
