import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-daatatable-edit',
  templateUrl: './daatatable-edit.component.html',
  styleUrls: ['./daatatable-edit.component.scss']
})
export class DaatatableEditComponent implements OnInit {
  dataTableForm: FormGroup;
  updatedData;
  id: number;
  editMode = false;
  modifiedValue;
  patchingEditValue;
  constructor(private router: Router, private route: ActivatedRoute, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = 'id';
      this.id = params[id];
      this.editMode = params[id] != null;
      this.init();
    });
  }

  onSubmit() {
    const randomId = (Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 5));
    const dateToConcat = this.dataTableForm.value.actualDate && this.dataTableForm.value.actualDate !== '' ?
      this.dataTableForm.value.actualDate.split('00:00:00')[1] : ' GMT-0700 (PDT)';
    const modifiedDate = this.datePipe.transform(this.dataTableForm.value.date, 'EEE MMM dd yyyy HH:mm:ss').concat(dateToConcat);
    this.modifiedValue = {
      _id: this.dataTableForm.value._id ? this.dataTableForm.value._id : randomId,
      isActive: this.dataTableForm.value.isActive,
      balance: this.dataTableForm.value.balance,
      age: this.dataTableForm.value.age,
      name: {
        first: this.dataTableForm.value.name,
        last: this.dataTableForm.value.last,
      },
      email: this.dataTableForm.value.email,
      phone: this.dataTableForm.value.phone,
      address: this.dataTableForm.value.address,
      date: modifiedDate
    };
    if (this.editMode) {
      this.editRecords(this.id, this.modifiedValue);
    } else {

      this.addRecords(this.modifiedValue);
    }
    this.router.navigate(['']);
  }

  addRecords(value) {
    const records = this.getRecordsFromLocalStorage();
    records.push(value);
    localStorage.setItem('records', JSON.stringify(records));
  }

  editRecords(index, value) {
    const records = this.getRecordsFromLocalStorage();
    const recordIndex = records.findIndex(item => {
      return item._id === index;
    });
    records[recordIndex] = value;
    localStorage.setItem('records', JSON.stringify(records));
  }

  getRecord(index) {
    return this.getRecordsFromLocalStorage().filter(item => {
      return item._id === index;
    });
  }

  getRecordsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('records'));
  }

  init() {
    let name = '';
    let last = '';
    let address = '';
    let phone = '';
    let balance = '';
    let email = '';
    let isActive = '';
    let actualDate = '';
    let date = '';
    let age = '';
    if (this.editMode) {
      const record = this.getRecord(this.id);
      this.patchingEditValue = record[0];
      name = this.patchingEditValue.name.first;
      last = this.patchingEditValue.name.last;
      address = this.patchingEditValue.address;
      phone = this.patchingEditValue.phone;
      balance = this.patchingEditValue.balance;
      email = this.patchingEditValue.email;
      isActive = this.patchingEditValue.isActive;
      actualDate = this.patchingEditValue.date;
      date = actualDate;
      age = this.patchingEditValue.age;
    }
    this.dataTableForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      last: new FormControl(last, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
      phone: new FormControl(phone, [Validators.required]),
      balance: new FormControl(balance, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      isActive: new FormControl(isActive, [Validators.required]),
      actualDate: new FormControl(actualDate, [Validators.required]),
      date: new FormControl(actualDate && actualDate !== '' ?
        (formatDate(actualDate, 'yyyy-MM-dd', 'en', '-0700'))
        : formatDate(new Date().toString(), 'yyyy-MM-dd', 'en'), [Validators.required]),
      age: new FormControl(age, [Validators.required]),
    });
  }

  previousState() {
    this.router.navigate(['']);
  }
}
