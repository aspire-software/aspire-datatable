import { Component, OnInit } from '@angular/core';
import { records, customNoDataMessage } from '../../helper/table-record';
import { dateFormat } from '../../helper/table-record';

@Component({
  selector: 'app-datatable-basic',
  templateUrl: './datatable-basic.component.html',
  styleUrls: ['./datatable-basic.component.scss']
})
export class DatatableBasicComponent implements OnInit {
  headers: any[] = [];
  data: any[] = [];
  page: number = 1;
  recordsLength: number;
  itemsPerPage: number = 5;
  allowSorting: boolean;
  dateFormat: string;
  allowSearch: boolean;
  noRecordFoundMessage: string;
  constructor() { }

  ngOnInit(): void {
    this.initSampleData();
  }

  initSampleData = () => {
    this.headers = [
      {'field':'name','type':'string'},
      {'field': 'address','type':'string'}, 
      {'field':'mobile','type':'number'}, 
      {'field':'balance','type':'number'}, 
      {'field':'email','type':'string'}, 
      {'field':'isActive','type':'boolean'},
      {'field':'date','type':'date'},
      {'field':'age','type':'number'}
    ];
      this.data = records.map((item, index) => ({
        name: `${item.name.first} ${item.name.last}`,
        address: item.address,
        mobile: item.phone,
        balance: item.balance,
        email: item.email,
        isActive: item.isActive,
        date: item.date,
        age: item.age
      })
    );
    this.recordsLength = records.length;
    this.allowSorting = true;
    this.allowSearch = true;
    this.noRecordFoundMessage = customNoDataMessage;
    this.dateFormat = dateFormat;
  }
}
