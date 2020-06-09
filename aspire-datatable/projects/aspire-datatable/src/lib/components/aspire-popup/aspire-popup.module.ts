import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspirePopupComponent } from './aspire-popup.component';

@NgModule({
    declarations: [AspirePopupComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AspirePopupComponent]
})
export class AspirePopupModule { }
