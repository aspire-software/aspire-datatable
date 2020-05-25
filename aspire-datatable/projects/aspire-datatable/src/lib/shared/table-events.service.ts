import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableEventsService {
  page: number;
  pageSize: number;
  public subject = new Subject<number>();
  private pageSource = new BehaviorSubject(this.page);
  currentPage = this.pageSource.asObservable();

  constructor() { }

  public setPage(page) {
    this.pageSource.next(page);
  }

  public sorting(field, records, event, dataType) {
    let sortData;

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
      sortData = records.sort(this.sortData(field, true, dataType));
    } else {
      item.classList.add('fa-sort-down');
      item.classList.remove('fa-sort-up');
      item.classList.add('active');
      sortData = records.sort(this.sortData(field, false, dataType));
    }
    return sortData;
  }

  // Comparator Function    
  private sortData(prop, asc, dataType) {
    return (a, b) => {
      let valueFirst = a[prop];
      let valueSecond = b[prop];
      if (dataType === 'date') {
        valueFirst = new Date(valueFirst).getTime();
        valueSecond = new Date(valueSecond).getTime();
        if (!valueFirst) valueFirst = 0;
        if (!valueSecond) valueSecond = 0;
      }

      if (asc) {
        return (valueFirst > valueSecond) ? 1 : ((valueFirst < valueSecond) ? -1 : 0);
      } else {
        return (valueSecond > valueFirst) ? 1 : ((valueSecond < valueFirst) ? -1 : 0);
      }
    }
  }
}
