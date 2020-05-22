import { Component, OnInit, Input } from '@angular/core';
import { TableEventsService } from '../../shared/table-events.service';

@Component({
  selector: 'aspire-records-count',
  templateUrl: './aspire-records-count.component.html',
  styleUrls: ['./aspire-records-count.component.css']
})

export class AspireRecordsCountComponent implements OnInit {

  @Input() totalRecords: number = 0;
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;

  startCount: number;
  endCount: number;
  totalCount: number;
  totalPages: number;

  constructor(private tableEvents: TableEventsService) { }

  ngOnInit() {
    this.updatedTotalCounts(this.totalRecords);
  }

  getRecordsCount() {
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

  updateRecordCount(value) {
    this.itemsPerPage = value;
    this.getRecordsCount();
  }

  updatedTotalCounts(recordsCount) {
    this.totalCount = recordsCount;
    this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage);
    this.getRecordsCount();
  }
}