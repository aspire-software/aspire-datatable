import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableBasicModule } from './components/datatable-basic/datatable-basic.module';
import { AspireDatatableModule } from '../../../aspire-datatable/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkRefComponent } from './components/link-ref/link-ref.component';
import { RouterModule } from '@angular/router';
import { DaatatableEditComponent } from './components/daatatable-edit/daatatable-edit.component';
import { ViewDatatableComponent } from './components/view-datatable/view-datatable.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LinkRefComponent,
    DaatatableEditComponent,
    ViewDatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableBasicModule,
    AspireDatatableModule,
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
