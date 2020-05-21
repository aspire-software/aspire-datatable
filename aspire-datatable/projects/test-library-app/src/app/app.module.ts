import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AspireDatatableModule } from 'aspire-datatable';
import { DatatableBasicComponent } from './components/datatable-basic/datatable-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    DatatableBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AspireDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
