import {Component, OnInit} from '@angular/core';
import {StocksService} from '../../services/stocks.service';

// Component annotation wire up as constructor injection
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add(): void {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol): void {
    this.symbols = this.service.remove(symbol);
  }
}
