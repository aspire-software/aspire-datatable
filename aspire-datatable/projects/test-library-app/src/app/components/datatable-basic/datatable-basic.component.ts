import { Component, OnInit } from '@angular/core';
import { records, customNoDataMessage } from '../../helper/table-record';

@Component({
  selector: 'app-datatable-basic',
  templateUrl: './datatable-basic.component.html',
  styleUrls: ['./datatable-basic.component.scss']
})
export class DatatableBasicComponent implements OnInit {
  tableHeaders: any[] = [];
  tableData: any[] = [];
  totalRecords: number;
  recordsLength: number;
  itemsPerPage: number = 5;
  dateFormat: string;
  tableOptions: any;
  constructor() {
    this.tableOptions = {
      tableStyle: 'table table-striped table-bordered',
      headerStyle: 'thead-light',
      tableDiv: 'table-responsive-md',
      tableRowStyle: '',
      tableDataStyle: '',
      pageSize: 5,
      page: 1,
      ellipses: false,
      maxSize: 1,
      directionLinks: true,
      boundaryLinks: true,
      sorting: true,
      search: true,
      dateFormat: 'dd/MM/yyyy',
      searchingStyle: "",
      noRecordFoundMessage: 'No Data Found',
      maxVisiblePage: 10,
      itemsPerPage: 10,
      paginationStyle: '',
      pageItemStyle: 'page-item',
      pageLinkStyle: 'page-link',
      showPagination: true,
      resetPagination: true,
      showRecordsCount: true,
      showPageSizeSelector: true,
      selectRecordsPerPage: [5, 10, 20, 30, 50],
    }
  }

  ngOnInit(): void {
    this.initSampleData();
  }

  initSampleData = () => {
    this.tableHeaders = [
      { 'field': 'name', 'type': 'string' },
      { 'field': 'address', 'type': 'string' },
      { 'field': 'mobile', 'type': 'number' },
      { 'field': 'balance', 'type': 'number' },
      { 'field': 'email', 'type': 'string' },
      { 'field': 'isActive', 'type': 'boolean' },
      { 'field': 'date', 'type': 'date' },
      { 'field': 'age', 'type': 'number' },
    ];
    this.tableData = records.map((item, index) => ({
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
    this.tableOptions.sorting = true;
    this.tableOptions.allowSearch = true;
    this.tableOptions.noRecordFoundMessage = customNoDataMessage;
  }

}
