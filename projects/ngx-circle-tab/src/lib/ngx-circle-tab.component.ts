import {AfterContentChecked, Component, ContentChildren, Directive, Input, OnInit, QueryList, TemplateRef} from '@angular/core';

let nextId = 0;

@Directive({selector: 'ng-template[circleTabTitle]'})
// tslint:disable-next-line:directive-class-suffix
export class CircleTabTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[circleTabContent]'})
// tslint:disable-next-line:directive-class-suffix
export class CircleTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'circle-tab'})
// tslint:disable-next-line:directive-class-suffix
export class CircleTab {
  @Input() title: string;
  @Input() id = `circle-tab-${nextId++}`;
  @ContentChildren(CircleTabContent, {descendants: false}) content: QueryList<CircleTabContent>;
}

@Component({
  selector: 'circle-tabs',
  templateUrl: './ngx-circle-tab.component.html',
  styleUrls: ['./ngx-circle-tab.scss']
})
export class NgxCircleTabComponent implements OnInit, AfterContentChecked {
  @Input() activeId: any;

  @ContentChildren(CircleTab) circleTab: QueryList<CircleTab>;

  Math = Math;

  constructor() {
    this.activeId = 1;
  }

  ngAfterContentChecked() {
    console.log('circleTab:', this.circleTab);
    const activeTab: any = this._getTabById(this.activeId);
    this.activeId = activeTab ? activeTab.id : (this.circleTab.length ? this.circleTab.first.id : null);
  }

  ngOnInit() {
  }

  selectTab(id: any) {
    console.log('id:', id)
    this.activeId = id;
  }

  private _getTabById(id: string): CircleTab {
    const tabsWithId: CircleTab[] = this.circleTab.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }

}
