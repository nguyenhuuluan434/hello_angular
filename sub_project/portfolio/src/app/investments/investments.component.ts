import {Component, DoCheck} from '@angular/core';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements DoCheck {
  cost = 0;
  value = 0;
  change = 0;
  stocks: any = [];
  length = 0;

  constructor(private accountService: AccountService) {
  }

  sell(index): void {
    this.accountService.sell(index);
  }

  ngDoCheck(): void {
    if (this.accountService.stocks.length !== this.stocks.length) {
      this.stocks = this.accountService.stocks;
    }
    if (this.cost !== this.accountService.cost || this.value !== this.accountService.value) {
      this.cost = this.accountService.cost;
      this.value = this.accountService.value;
      this.change = this.accountService.value - this.accountService.cost;
    }
  }

}
