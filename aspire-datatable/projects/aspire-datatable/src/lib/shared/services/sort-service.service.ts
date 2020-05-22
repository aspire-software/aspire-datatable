import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class SortServiceService {

  selectedFieldsData: any;
  updatedrecordData: any;

  constructor() {
    this.selectedFieldsData = [];
    this.updatedrecordData = [];
  }

  sorting(field, records, event, dataType) {
    let sortData;
    const ascOrder = _.sortBy(records, field);
    const descOrder = _.sortBy(records, field).reverse();
    // const ascOrderDate = records.sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime());
    // const descOrderDate = records.sort((d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime());

    const elements = document.querySelectorAll('thead tr th i.active');

    if (elements) {
      for (const element of elements[Symbol.iterator]()) {
        element.classList.remove('active');
      }
    }

    const item = event.currentTarget.children[1];
    if (item.classList.contains('fa-sort-down')) {
      item.classList.remove('fa-sort-down');
      item.classList.add('fa-sort-up');
      item.classList.add('active');
      sortData = ascOrder;
    } else {
      item.classList.add('fa-sort-down');
      item.classList.remove('fa-sort-up');
      item.classList.add('active');
      sortData = descOrder;
    }
    return sortData;
  }
}