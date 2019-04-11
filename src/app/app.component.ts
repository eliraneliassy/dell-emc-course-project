import { Component } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  item: Item;
  constructor() {
    this.item = {
      title: 'Title',
      price: 22,
      imageUrl: 'https://slice-productimage.s3.amazonaws.com/69/df/0a/4d/47/af/43/b7/a8a7c8f181ed2f9b9190d3f7bd9f5ecbdc9b670e5b59095a'
    };
  }

}
