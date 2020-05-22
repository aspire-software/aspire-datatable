import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableBasicModule } from './components/datatable-basic/datatable-basic.module';
// import { AspireDatatableModule } from 'aspire-datatable';
import { AspireDatatableModule } from '../../../aspire-datatable/src/public-api';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableBasicModule,
    AspireDatatableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
