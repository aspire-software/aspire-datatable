import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-aspire-popup',
  templateUrl: './aspire-popup.component.html',
  styleUrls: ['./aspire-popup.component.css']
})
export class AspirePopupComponent implements OnInit {
  @Input() popupLib;
  @Input() classList = 'dropdown-item';
  @Output() confirmDelete = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onConfirm() {
    this.confirmDelete.emit();

  }
}
