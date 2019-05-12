import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { HighlightDirective } from '../highlight.directive';
import { InfiniteScrollDirective } from '../infinite-scroll.directive';

export const componentsNdirectives = [
  ItemComponent,
  HighlightDirective,
  InfiniteScrollDirective];

@NgModule({
  declarations: [...componentsNdirectives],
  exports: [...componentsNdirectives],
  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
