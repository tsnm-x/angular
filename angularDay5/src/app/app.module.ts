import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PricePipePipe } from './price-pipe.pipe';
import { ChangeCountPipe } from './change-count.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    ProductCardComponent,
    PricePipePipe,
    ChangeCountPipe,
    NotFoundPageComponent,
    ProductDetailsComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
