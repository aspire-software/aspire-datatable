import { Component, OnInit, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'aspire-records-perpage',
  templateUrl: './aspire-records-perpage.component.html'
})
export class AspireRecordsPerpageComponent implements OnInit {
  @Input() itemsPerPage: number;
  @Input() recordsPerPageOptions: any[] = [5, 10, 20, 30, 50];

  private getPerPageRecords = new BehaviorSubject(this.itemsPerPage);
  @Output() perPageRecords = this.getPerPageRecords.asObservable();

  recordsPerPageForm = this.formBuilder.group({
    recordsPerPage: [null, Validators.required]
  });

  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.recordsPerPageForm.controls.recordsPerPage.setValue(this.itemsPerPage);
    this.getPerPageRecords.next(this.itemsPerPage);
  }

  onSelection(value: number): void {
    this.getPerPageRecords.next(value);
  }
}
