import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'feed', loadChildren: './feed/feed.module#FeedModule' },
  { path: 'table', component: TableComponent },
  {
    path: '', canActivateChild: [AuthGuard], children: [
      { path: 'cart', component: CartComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
