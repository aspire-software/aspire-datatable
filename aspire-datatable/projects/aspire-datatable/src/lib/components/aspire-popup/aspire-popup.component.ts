import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lib-aspire-popup',
  templateUrl: './aspire-popup.component.html'
})
export class AspirePopupComponent implements OnInit {
  @Input() popupLib;
  @Input() classList = 'dropdown-item';
  @Input() perAction;

  private onConfirmAction = new BehaviorSubject(null);
  @Output() confirmAction = this.onConfirmAction.asObservable();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.popupLib = this.popupLib.filter(item => item.perAction === this.perAction);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onConfirm() {
    this.onConfirmAction.next(this.perAction);
  }
}
