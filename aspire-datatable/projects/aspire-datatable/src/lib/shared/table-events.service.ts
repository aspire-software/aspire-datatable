import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableEventsService {
  page: number;
  private pageSource = new BehaviorSubject(this.page);
  currentPage = this.pageSource.asObservable();

  constructor() { }

  public setPage(page: number): void {
    this.pageSource.next(page);
  }

  public sorting(field: string, records: any[], event: any, dataType: string): any[] {
    const item = event.currentTarget.children[1];

    const elements = document.querySelectorAll('thead tr th i.active');
    if (elements) {
      for (const element of elements[Symbol.iterator]()) {
        element.classList.remove('active');
        if (element !== item) {
          element.classList.remove('fa-sort-up');
          element.classList.add('fa-sort-down');
        }
      }
    }

    const isItemContainsSortDown = item.classList.contains('fa-sort-down');
    item.classList.remove(isItemContainsSortDown ? 'fa-sort-down' : 'fa-sort-up');
    item.classList.add((isItemContainsSortDown ? 'fa-sort-up' : 'fa-sort-down'), 'active');
    return records.sort(this.sortData(field, isItemContainsSortDown, dataType));
  }

  // Comparator Function
  private sortData(prop: any, asc: boolean, dataType: string): any {
    return (first: any, second: any) => {
      if (dataType === 'date') {
        first[prop] = new Date(first[prop]).getTime();
        second[prop] = new Date(second[prop]).getTime();
        if (!first[prop]) { first[prop] = 0; }
        if (!second[prop]) { second[prop] = 0; }
      }

      if (asc) {
        return (first[prop] > second[prop]) ? 1 : ((first[prop] < second[prop]) ? -1 : 0);
      } else {
        return (second[prop] > first[prop]) ? 1 : ((second[prop] < first[prop]) ? -1 : 0);
      }
    };
  }
}
