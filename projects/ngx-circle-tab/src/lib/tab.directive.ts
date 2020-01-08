import {ContentChildren, Directive, OnInit} from '@angular/core';

@Directive({ selector: 'tab' })
export class TabDirective implements OnInit {
  @ContentChildren('circle-tabs') tabs;

  constructor() {
  }

  ngOnInit(): void {
    console.log('tabs:', this.tabs);
  }
}
