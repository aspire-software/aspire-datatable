import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { records } from '../../helper/table-record';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datatable-delete',
  templateUrl: './datatable-delete.component.html',
  styleUrls: ['./datatable-delete.component.scss']
})
export class DatatableDeleteComponent implements OnInit {
  // showModal = false;
  closeResult = '';
  id
  constructor(config: NgbModalConfig,
    private modalService: NgbModal, private router: Router,
    private route: ActivatedRoute,
   public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
    // this.showModal = true;
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }
  //  onSubmit(content){
  //    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  //    let recordIndex = records.findIndex(item => {
  //     return item._id === this.id;
  //   })
  //   records.splice(recordIndex, 1);
  //   this.router.navigate(['']);
  //  }
  //  onClear(){
  // this.router.navigate(['']);
  //  }
  // open(content) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  // }
  clear() {
    this.activeModal.dismiss('cancel');
  }

  onSubmit(){
    let recordIndex = records.findIndex(item => {
      return item._id === this.id;
    })
    records.splice(recordIndex, 1);
  }

  // onClose() {
  //   this.showModal = false;
  //   //Allow fade out animation to play before navigating back
  //   setTimeout(
  //     () => this.router.navigate(['..']),
  //     100
  //   );
  // }
//   onDialogClick(event: UIEvent) {
//     // Capture click on dialog and prevent it from bubbling to the modal background.
//     event.stopPropagation();
//     event.cancelBubble = true;
//   }
}

@Component({
  selector: 'delete-popup',
  template: ''
})
export class DatatableDeleteDialogComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;
  subscription: Subscription;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({ proposal }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(DatatableDeleteComponent as Component, { size: 'sm', backdrop: 'static' });
        // this.ngbModalRef.componentInstance.proposal = proposal;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/crm/proposals']);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/crm/proposals', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
    this.subscription.unsubscribe();
  }

}