import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddressComponent } from './add-customer/address/address.component';
import { UserComponent } from './user/user.component';
import { ObservableComponent } from './observable/observable.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,    
    AddCustomerComponent,    
    AddressComponent, UserComponent,  ObservableComponent, ServicesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
