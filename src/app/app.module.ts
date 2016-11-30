import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HeroComponent } from './hero/hero.component';
import { CreateObsComponent } from './create-obs/create-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    HeroComponent,
    CreateObsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
