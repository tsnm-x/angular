import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "", 
    component: ProductListComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "product-details/:id",
    component: ProductDetailsComponent
  },
  {
    path: "add-to-cart",
    component: BuyProductComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
