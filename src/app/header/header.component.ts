import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  num = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(() =>
      this.num = this.cartService.countItems())
      ;
  }

}
