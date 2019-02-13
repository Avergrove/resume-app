import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule} from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  
  exports: [AccordionModule, BsDropdownModule, TooltipModule, ModalModule]
})
export class AppBootstrapModule { }
