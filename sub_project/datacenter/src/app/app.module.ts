import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MetricComponent} from './metric/metric.component';
import {NodesComponent} from './nodes/nodes.component';
import {NodesRowComponent} from './nodes-row/nodes-row.component';
import {AppTest1Component} from './app-test1/app-test1.component';
import {ChildContentComponent} from './child-content/child-content.component';
import {NodesDetailComponent} from './nodes-detail/nodes-detail.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    AppTest1Component,
    ChildContentComponent,
    NodesDetailComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [NodesDetailComponent, AlertComponent]
})
export class AppModule {
}
