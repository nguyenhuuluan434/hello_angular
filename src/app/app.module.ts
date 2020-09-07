import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StocksService} from './services/stocks.service';
import {SummaryComponent} from './components/summary/summary.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManageComponent} from './components/manage/manage.component';
import {FormsModule} from '@angular/forms';
import {AppRoutes} from './app.routes';

/*A module is declared by creating a class and decorating it with the @NgModule*/
@NgModule({
  // defined array of components and directives
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  // defines array of modules to import
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  // defines array of services to load
  providers: [StocksService],
  // defined array of component to bootstrap on startup
  bootstrap: [AppComponent]
})
export class AppModule {
}
