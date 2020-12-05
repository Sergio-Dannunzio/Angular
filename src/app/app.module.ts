import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { GoldListComponent } from './gold-list/gold-list.component';
import { GoldCartComponent } from './gold-cart/gold-cart.component';
import { GoldHomeComponent } from './gold-home/gold-home.component';
import { GoldAboutComponent } from './gold-about/gold-about.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldListComponent,
    GoldCartComponent,
    GoldHomeComponent,
    GoldAboutComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
