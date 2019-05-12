import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    FeedComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
