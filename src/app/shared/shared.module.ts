import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { HighlightDirective } from '../highlight.directive';
import { InfiniteScrollDirective } from '../infinite-scroll.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export const componentsNdirectives = [
  ItemComponent,
  HighlightDirective,
  InfiniteScrollDirective];

@NgModule({
  declarations: [...componentsNdirectives],
  exports: [...componentsNdirectives, MatFormFieldModule, MatInputModule],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
