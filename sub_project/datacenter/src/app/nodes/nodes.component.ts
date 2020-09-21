import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  /*change selector here to say it will look for attribute app-nodes*/
  /*The selector can take any valid CSS selector*/
  /*selector là css property => nó sẽ là custom attribute của html tag */
  /*ví dụ <table app-nodes class="table table-hover">*/
  // tslint:disable-next-line
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
