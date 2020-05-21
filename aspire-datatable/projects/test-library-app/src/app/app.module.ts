import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AspireDatatableModule } from 'aspire-datatable';
import { DatatableBasicComponent } from './components/datatable-basic/datatable-basic.component';
import { AspireDatatableModule } from '../../../aspire-datatable/src/public-api';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatatableBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AspireDatatableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
