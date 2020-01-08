import { NgModule } from '@angular/core';
import {CircleTab, CircleTabContent, CircleTabTitle, NgxCircleTabComponent} from './ngx-circle-tab.component';
import {TabDirective} from './tab.directive';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgxCircleTabComponent, TabDirective, CircleTab, CircleTabTitle, CircleTabContent, NgxCircleTabComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxCircleTabComponent, TabDirective, CircleTab, CircleTabTitle, CircleTabContent, NgxCircleTabComponent]
})
export class NgxCircleTabModule { }
