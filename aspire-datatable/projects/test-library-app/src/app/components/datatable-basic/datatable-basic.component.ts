import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-datatable-basic',
  templateUrl: './datatable-basic.component.html',
  styleUrls: ['./datatable-basic.component.scss']
})
export class DatatableBasicComponent implements OnInit {
  public tableWidget: any;

  constructor() { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit() {
      this.initDatatable();
    }

    private initDatatable(): void {
      const exampleId: any = $('#example');
      this.tableWidget = exampleId.DataTable({
        select: true
      });
    }

    private reInitDatatable(): void {
     if (this.tableWidget) {
       this.tableWidget.destroy();
       this.tableWidget = null;
     }
     setTimeout(() => this.initDatatable(), 0);
   }

}
