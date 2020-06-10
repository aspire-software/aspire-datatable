import { Component, OnInit, Input } from '@angular/core';
import { TableEventsService } from '../../shared/table-events.service';

@Component({
  selector: 'aspire-records-count',
  templateUrl: './aspire-records-count.component.html',
  styleUrls: ['./aspire-records-count.component.css']
})

export class AspireRecordsCountComponent implements OnInit {

  totalRecordsNo: number = 0;
  @Input()
  set totalRecords(val: number) {
    this.totalRecordsNo = val;
    this.updatedTotalCounts(this.totalRecords);
  }

  get totalRecords(): number {
    return this.totalRecordsNo;
  }

  itemsPerPageNo: number = 5;
  @Input()
  set itemsPerPage(val: number) {
    this.itemsPerPageNo = val;
    this.updatedTotalCounts(this.totalRecords);
  }

  get itemsPerPage(): number {
    return this.itemsPerPageNo;
  }

  startCount: number;
  endCount: number;
  totalCount: number;
  totalPages: number;

  constructor(private tableEvents: TableEventsService) { }

  ngOnInit(): void {
    this.updatedTotalCounts(this.totalRecords);
  }

  getRecordsCount(): void {
    this.tableEvents.currentPage.subscribe(page => {
      if (this.itemsPerPage >= this.totalCount) {
        this.startCount = page;
        this.endCount = this.totalCount;
      } else {
        this.startCount = (page - 1) * this.itemsPerPage ? ((page - 1) * this.itemsPerPage) + 1 : 1;
        // tslint:disable-next-line:max-line-length
        this.endCount = ((page - 1) * this.itemsPerPage + this.itemsPerPage) > this.totalCount ? this.totalCount : (page - 1) * this.itemsPerPage + this.itemsPerPage;
      }
    });
  }

  updateRecordCount(value: number): void {
    this.itemsPerPage = value;
    this.getRecordsCount();
  }

  updatedTotalCounts(recordsCount: number): void {
    this.totalCount = recordsCount;
    this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage);
    this.getRecordsCount();
  }
}
