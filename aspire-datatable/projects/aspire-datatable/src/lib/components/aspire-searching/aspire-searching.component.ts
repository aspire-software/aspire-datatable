import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'aspire-searching',
  templateUrl: './aspire-searching.component.html',
  styleUrls: ['./aspire-searching.component.css']
})

export class AspireSearchingComponent implements OnInit {
  @Input() records: any[] = [];
  @Input() searchingStyle: string = "";

  public subject = new Subject<number>();
  private getSearchRecords = new BehaviorSubject(this.records);
  @Output() searchRecords = this.getSearchRecords.asObservable();

  totalRecords: any = [];

  constructor() {
    this.totalRecords = [];
  }

  ngOnInit() {
    this.totalRecords = this.records;
    this.getSearchRecords.next(this.records);
  }

  search(event: string) {
    let searchItem: any = event;
    let filterRecord: any = [];
    if (searchItem === '') {
      this.records = this.totalRecords;
    }
    else {
      if (this.totalRecords.length) {
        if (searchItem.length > 2) {
          filterRecord = this.totalRecords.filter(element => {
            const isAvailable = Object.values(element).some(objectValues =>
              objectValues.toString().trim().toLowerCase().includes(searchItem.toLowerCase().trim())
            );
            if (isAvailable) return element;
          });
          this.records = filterRecord.length ? [...new Set(filterRecord)] : [];
        }
        else {
          this.records = this.totalRecords;
        }
      }
    }
    this.getSearchRecords.next(this.records);
  }
}