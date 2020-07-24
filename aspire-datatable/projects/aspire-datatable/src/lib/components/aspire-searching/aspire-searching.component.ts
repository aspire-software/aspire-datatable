import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'aspire-searching',
  templateUrl: './aspire-searching.component.html'
})

export class AspireSearchingComponent implements OnInit {
  @Input() records: any[] = [];
  @Input() searchingStyle: string = '';

  private getSearchRecords = new BehaviorSubject(this.records);
  @Output() searchRecords = this.getSearchRecords.asObservable();

  totalRecords: any = [];

  constructor() {
    this.totalRecords = [];
  }

  ngOnInit(): void {
    this.totalRecords = this.records;
    this.getSearchRecords.next(this.records);
  }

  search(event: string): void {
    let filterRecord: any = [];
    if (this.totalRecords.length && event && event.trim() !== '' && event.trim().length > 2) {
      filterRecord = this.totalRecords.filter(element => {
        if (Object.values(element).some(objectValues =>
          objectValues.toString().trim().toLowerCase().includes(event.toLowerCase().trim())
        )) { return element; }
      });
      this.records = filterRecord.length ? [...new Set(filterRecord)] : [];
    } else {
      this.records = this.totalRecords;
    }
    this.getSearchRecords.next(this.records);
  }
}
