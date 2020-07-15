import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspirePopupComponent } from './aspire-popup.component';

@NgModule({
    declarations: [AspirePopupComponent],
    imports: [FormsModule, ReactiveFormsModule],
    exports: [AspirePopupComponent]
})
export class AspirePopupModule { }
