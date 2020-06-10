import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { records } from '../../helper/table-record';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = 'id';
      this.id = params[id];
      this.editMode = params[id] != null;
      this.init();
    });
  }
  onSubmit() {
    console.log(this.dataTableForm.value);
    this.modifiedValue = {
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
      date: this.dataTableForm.value.date
    };
    if (this.editMode) {
      this.editRecords(this.id, this.modifiedValue);
    } else {

      this.addRecords(this.modifiedValue);
    }
    this.router.navigate(['']);
  }

  addRecords(value) {
    records.push(value);

  }
  editRecords(index, value) {
    const recordIndex = records.findIndex(item => {
      return item._id === index;
    });
    console.log(recordIndex);
    records[recordIndex] = value;
  }

  getRecord(index) {
    return records.filter(item => {
      return item._id === index;
    });
  }
  init() {
    let name = '';
    let last = '';
    let address = '';
    let phone = '';
    let balance = '';
    let email = '';
    let isActive = '';
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
      date = this.patchingEditValue.date;
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
      date: new FormControl(date, [Validators.required]),
      age: new FormControl(age, [Validators.required]),
    });
  }

  previousState() {
    this.router.navigate(['']);
  }
}
