import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NodesDetailComponent} from '../nodes-detail/nodes-detail.component';

@Component({
  /*selector là css property => nó sẽ là custom attribute của html tag */
  /*ví dụ <tr app-nodes-row *ngFor="let node of cluster2" [node]="node" ]></tr>*/
  // tslint:disable-next-line
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  // tslint:disable-next-line
  @Input('node-prop') node: any;

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

  constructor(private modalService: NgbModal) {
  }
}
