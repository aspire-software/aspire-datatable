import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkRefComponent } from './components/link-ref/link-ref.component';
import { DatatableBasicComponent } from './components/datatable-basic/datatable-basic.component';
import { AspireDatatableComponent } from 'projects/aspire-datatable/src/public-api';
import { DaatatableEditComponent } from './components/daatatable-edit/daatatable-edit.component';
import { ViewDatatableComponent } from './components/view-datatable/view-datatable.component';
import { DatatableDeleteComponent, DatatableDeleteDialogComponent } from './components/datatable-delete/datatable-delete.component';


const routes: Routes = [
  { path: '', component: DatatableBasicComponent },
  { path: 'link', component: LinkRefComponent },
  { path: 'add', component: DaatatableEditComponent },
  { path: ':id/view', component: ViewDatatableComponent },
  { path: ':id/edit', component: DaatatableEditComponent },
  // { path: 'delete', component: DatatableDeleteDialogComponent, outlet:'popup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  entryComponents:[DatatableDeleteDialogComponent, DatatableDeleteComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
