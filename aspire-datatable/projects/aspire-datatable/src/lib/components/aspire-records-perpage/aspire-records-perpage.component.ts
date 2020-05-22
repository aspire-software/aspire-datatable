import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'aspire-records-perpage',
  templateUrl: './aspire-records-perpage.component.html',
  styleUrls: ['./aspire-records-perpage.component.css']
})
export class AspireRecordsPerpageComponent implements OnInit {
  myForm: FormGroup;
  @Input() itemsPerPage: number;
  @Input() showPageSizeSelector: boolean = true;
  @Input() selectRecordsPerPage: any[] = [2, 4, 6, 8];
  selectedRecords: any;

  constructor() { }
  // tslint:disable-next-line:no-output-on-prefix
  @Output() getPerPageRecords: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.myForm = new FormGroup({
      recordsPerPage: new FormControl('', Validators.required)
    });
  }

  onSelection(value) {
    this.getPerPageRecords.emit(value);
  }
}
