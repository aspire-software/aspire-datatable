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
    // this.dataTableForm = new FormGroup({
    //   'name': new FormControl(null, [Validators.required]),
    //   'last': new FormControl(null, [Validators.required]),
    //   'address': new FormControl(null, [Validators.required]),
    //   'mobile': new FormControl(null, [Validators.required]),
    //   'balance': new FormControl(null, [Validators.required]),
    //   'email': new FormControl(null, [Validators.required]),
    //   'isActive': new FormControl(null, [Validators.required]),
    //   'date': new FormControl(null, [Validators.required]),
    //   'age': new FormControl(null, [Validators.required]),
    // })
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
    // console.log(modifiedValue);
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
    // return records[index];
    return records.filter(item => {
      return item._id === index;
    });
  }
  init() {
    let name = '';
    let last = '';
    let address = '';
    let mobile = '';
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
      mobile = this.patchingEditValue.phone;
      balance = this.patchingEditValue.balance;
      email = this.patchingEditValue.email;
      isActive = this.patchingEditValue.isActive;
      date = this.patchingEditValue.date;
      age = this.patchingEditValue.age;
     
      // console.log(this.patchingEditValue);
      // // name=record[0].name;
      // address = record[0].address;
      // mobile = record[0].phone;
      // balance = record[0][balance];
      // email = record[0][email];
      // isActive = record[0][isActive];
      // date = record[0][date];
      // age = record[0][age];
      //  console.log(record[0].address);
    }
    this.dataTableForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      last: new FormControl(last, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
      mobile: new FormControl(mobile, [Validators.required]),
      balance: new FormControl(balance, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      isActive: new FormControl(isActive, [Validators.required]),
      date: new FormControl(date, [Validators.required]),
      age: new FormControl(age, [Validators.required]),
    });
  }
}
