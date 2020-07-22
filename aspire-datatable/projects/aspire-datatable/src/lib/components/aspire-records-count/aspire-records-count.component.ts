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
    this.updateTotalCounts(this.totalRecords);
  }

  get totalRecords(): number {
    return this.totalRecordsNo;
  }

  itemsPerPageNo: number = 5;
  @Input()
  set itemsPerPage(val: number) {
    this.itemsPerPageNo = val;
    this.updateTotalCounts(this.totalRecords);
  }

  get itemsPerPage(): number {
    return this.itemsPerPageNo;
  }

  startCount: number;
  endCount: number;
  totalCount: number;

  constructor(private tableEvents: TableEventsService) { }

  ngOnInit(): void {
    this.updateTotalCounts(this.totalRecords);
  }

  getRecordsCount(): void {
    this.tableEvents.currentPage.subscribe(page => {
      const itemCountDifference = this.itemsPerPage >= this.totalCount;
      const calculateCount = (page - 1) * this.itemsPerPage;
      this.startCount = itemCountDifference ? page : (calculateCount ? (calculateCount) + 1 : 1);
      this.endCount = itemCountDifference ? this.totalCount :
        ((calculateCount + this.itemsPerPage) > this.totalCount ? this.totalCount : calculateCount + this.itemsPerPage);
    });
  }

  updateRecordCount(value: number): void {
    this.itemsPerPage = value;
    this.getRecordsCount();
  }

  updateTotalCounts(recordsCount: number): void {
    this.totalCount = recordsCount;
    this.getRecordsCount();
  }
}
