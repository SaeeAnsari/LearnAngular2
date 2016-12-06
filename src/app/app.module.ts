import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { TestComponentComponent } from './test-component/test-component.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddressComponent } from './add-customer/address/address.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    UserComponent,
    AddUserComponent,
    AddCustomerComponent,    
    AddressComponent, UserRegistrationComponent,
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
