import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
/*Injectable annotate make wire up dependency injection*/
@Injectable()
export class StocksService {
  constructor(private http: HttpClient) {
  }

  get(): Array<string> {
    return stocks.slice();
  }

  add(stock: string): Array<string> {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string): Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>): Observable<Array<StockInterface>> {
    if (symbols === void 0) {
      return;
    }
    return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  }
}
