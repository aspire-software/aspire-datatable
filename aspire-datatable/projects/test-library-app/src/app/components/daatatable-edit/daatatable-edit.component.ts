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
  email;
  editMode = false;
  modifiedValue;
  patchingEditValue;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const email = 'email';
      this.email = params[email];
      this.editMode = params[email] != null;
      this.init();
      console.log(this.email);
    });
  }
  onSubmit() {
    console.log(this.dataTableForm.value);
    this.modifiedValue = {
      // _id:this.dataTableForm.value._id,
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
      this.editRecords(this.email, this.modifiedValue);
    } else {

      this.addRecords(this.modifiedValue);
    }
    this.router.navigate(['']);
  }

  addRecords(value) {
    // console.log(modifiedValue);
    records.push(value);

  }
  editRecords(email, value) {
    const recordIndex = records.findIndex(item => {
      return item.email === email;
    });
    console.log(recordIndex);
    records[recordIndex] = value;
  }

  getRecord(email) {
    // return records[index];
    return records.filter(item => {
      return item.email === email;
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
      const record = this.getRecord(this.email);
      console.log(record);
      this.patchingEditValue = record[0];
      // console.log("", this.patchingEditValue);
      const transformDate = new Date(this.patchingEditValue.date),
        mnth = ('0' + (transformDate.getMonth() + 1)).slice(-2),
        day = ('0' + transformDate.getDate()).slice(-2);
      const getTransformDate = [day, mnth, transformDate.getFullYear()].join('/');
      //  console.log(getTransformDate);
      //  _id=this.patchingEditValue._id;
      name = this.patchingEditValue.name.first;
      last = this.patchingEditValue.name.last;
      address = this.patchingEditValue.address;
      phone = this.patchingEditValue.phone;
      balance = this.patchingEditValue.balance;
      email = this.patchingEditValue.email;
      isActive = this.patchingEditValue.isActive;
      date = getTransformDate;
      age = this.patchingEditValue.age;
      console.log(date);
    }
    this.dataTableForm = new FormGroup({
      // _id:new FormControl(_id,[Validators.required]),
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
