import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HighlightDirective } from './highlight.directive';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightDirective,
    InfiniteScrollDirective,
    HeaderComponent,
    CartComponent,
    FeedComponent,
    ProductPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
