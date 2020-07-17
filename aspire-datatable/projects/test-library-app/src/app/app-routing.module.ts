import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkRefComponent } from './components/link-ref/link-ref.component';
import { DatatableBasicComponent } from './components/datatable-basic/datatable-basic.component';
import { DaatatableEditComponent } from './components/daatatable-edit/daatatable-edit.component';
import { ViewDatatableComponent } from './components/view-datatable/view-datatable.component';


const routes: Routes = [
  { path: '', component: DatatableBasicComponent },
  { path: 'link', component: LinkRefComponent },
  { path: 'add', component: DaatatableEditComponent },
  { path: ':id/view', component: ViewDatatableComponent },
  { path: ':id/edit', component: DaatatableEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
