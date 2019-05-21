import { FeedEffects } from './store/feed.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/feed.reducer';

@NgModule({
  declarations: [
    FeedComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }
