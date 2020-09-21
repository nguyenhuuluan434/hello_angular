import {Component, ComponentFactoryResolver, ComponentRef, VERSION, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NodesDetailComponent} from './nodes-detail/nodes-detail.component';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data: { name: string, class: { name: string, id: string } } = {name: 'Test', class: {name: '1A', id: '1'}};
  public array = [{name: '1'}, {name: '2'}, {name: '3'}];
  name = 'Angular ' + VERSION.major;

  alertRef: ComponentRef<AlertComponent>;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  @ViewChild('alertBox', {read: ViewContainerRef}) alertBox: ViewContainerRef;

  refresh() {
    this.dashboard.generateData();
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  alert(date) {
    if (!this.alertRef) {
      const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();
    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  public onClick() {
    this.data.name = 'Name from Parent with number' + Math.random();
  }
}
