import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor() {
  }

  /*provided by parent component*/
  /*Properties are bound to  an element using an attribute*/
  /*<summary [stock]="stockData"></summary>*/
  @Input() stock: any;

  isNegative(): boolean {
    return (this.stock && this.stock.change < 0);
  }

  isPositive(): boolean {
    return (this.stock && this.stock.change > 0);
  }

  ngOnInit(): void {
  }

}
