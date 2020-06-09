import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-library-app';
  constructor(public router: Router) { }
  onAdd() {
    this.router.navigate(['add']);
  }
}
