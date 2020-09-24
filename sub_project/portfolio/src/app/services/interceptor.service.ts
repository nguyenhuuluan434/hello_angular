import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AccountService} from './account.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {ConfigService} from './config.service';
import {Stock} from './stocks.model';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private accountService: AccountService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();
    request.headers.append('Accept', 'application/json');
    return next.handle(request).do(event => {
      if (!(event instanceof HttpResponse) || !(event.url === ConfigService.get('api'))) {
        return;
      }
      const stocks = event.body as Array<Stock>;
      stocks.forEach(stock => {
        this.accountService.stocks.map(item => {
          if (stock.symbol !== item.symbol) {
            return;
          }
          item.price = stock.price;
          item.change = ((stock.price * 100) - (item.cost * 100)) / 100;
        });
      });
      this.accountService.calculateValue();
      return stocks;
    });
  }
}
