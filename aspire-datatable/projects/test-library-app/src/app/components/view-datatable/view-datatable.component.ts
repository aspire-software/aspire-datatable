import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-datatable',
  templateUrl: './view-datatable.component.html',
  styleUrls: ['./view-datatable.component.scss']
})
export class ViewDatatableComponent implements OnInit {
  id: number;
  displayedArray = [];
  displayedObject;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = 'id';
      this.id = params[id];
    });
    this.displayedArray = this.getRecord(this.id);
    this.displayedObject = this.displayedArray[0];
  }

  getRecord(index) {
    var records = JSON.parse(localStorage.getItem('records'));
    return records.filter(item => {
      return item._id === index;
    });
  }

  previousState() {
    this.router.navigate(['']);
  }
}
