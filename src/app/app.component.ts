import { CartService } from './cart.service';
import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    // this.router.events.subscribe(console.log);
  }


}
