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
      page: 1,
      maxSize: 1,
      boundaryLinks: true,
      dateFormat: 'dd/MM/yyyy',
      searchingStyle: "",
      noRecordFoundMessage: 'No Data Found',
      itemsPerPage: 10,
      resetPagination: true,
      sorting: true,
      showSearch: true,
      showRecordsCount: true,
      showPagination: true,
      showPageSizeSelector: true,
      selectRecordsPerPage: [5, 10, 20, 30, 50],
      paginationOptions: {
        directionLinks: true,
        ariaLabel: 'Default pagination',
        ellipsis: false,
        maxVisiblePage: 10,
        disable: false,
        paginationStyle: 'pagination justify-content-center',
        pageItemStyle: 'page-item',
        pageLinkStyle: 'page-link',
        firstPageText: '<<',
        prevPageText: '<',
        nextPageText: '>',
        lastPageText: '>>'
      },
      componentsClass: {
        topBlankComponentClassList: "col-md-4 col-sm-12",
        bottomBlankComponentClassList: "col-md-4 col-sm-12",
        pagination: {
          position: "bottom-right",
          classList: "col-md-8 col-sm-8 mt-2 mt-sm-0",
          componentClassList: "justify-right justify-center-center"
        },
        recordsCount: {
          position: "bottom-left",
          classList: "col-md-4 col-sm-4 mt-2 mt-sm-0",
          componentClassList: "justify-center-center"
        },
        search: {
          position: "top-right",
          classList: "col-md-6 col-sm-6 mb-2 mb-sm-0",
          componentClassList: "justify-right"
        },
        recordsPerPage: {
          position: "top-left",
          classList: "col-md-6 col-sm-6",
          componentClassList: "itemsPerPage"
        }
      }
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
    this.tableOptions.sorting = true;
    this.tableOptions.noRecordFoundMessage = customNoDataMessage;
  }
}
