import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {

  // @ts-ignore
  @Output() onRefresh: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  refresh() {
    this.onRefresh.emit();
  }

}
