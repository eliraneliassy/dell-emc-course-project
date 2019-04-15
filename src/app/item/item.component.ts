import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Item } from '../item.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  // implements OnInit, OnChanges, DoCheck,
  // AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  // OnDestroy 


  @Input() item: Item;

  @Input() existInCart: boolean;
  @Output() addToCart: EventEmitter<Item> =
    new EventEmitter<Item>();

  @Output() removeFromCart: EventEmitter<Item> =
    new EventEmitter<Item>();
  constructor() {
    // console.log('ctor');
  }

  // ngOnInit() {
  //   console.log('On Init');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('On Changes ', changes);
  // }
  // ngDoCheck(): void {
  //   console.log('Do Check');
  // }
  // ngAfterContentInit(): void {
  //   console.log('After Content Init');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After Content Checked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('After View Init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('After View Checked');
  // }
  // ngOnDestroy(): void {
  //   console.log('On Destroy');
  // }


  addToCartClicked() {
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked() {
    this.removeFromCart.emit(this.item);
  }

}
