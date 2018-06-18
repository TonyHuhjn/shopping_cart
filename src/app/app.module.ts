import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { TopitemService } from './top-item.service';
import { AppComponent } from './app.component';

import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, routableComponents],
  providers: [TopitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

