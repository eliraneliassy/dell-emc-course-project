import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', canActivateChild: [AuthGuard], children: [
      { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: ProductPageComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
