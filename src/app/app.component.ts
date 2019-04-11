import { Component } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = [];
  constructor() {
    this.items = db;
  }

}
