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
}
