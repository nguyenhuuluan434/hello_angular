import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ChildContentComponent} from '../child-content/child-content.component';

@Component({
  selector: 'app-app-test1',
  templateUrl: './app-test1.component.html',
  styleUrls: ['./app-test1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTest1Component implements DoCheck, AfterContentInit, OnInit, OnChanges {

  @Input()
  public data: { name: string, class: { name: string, id: string } };

  @Input()
  public array: { name: string }[];

  @Input()
  public id: string;

  private oldName: string;

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  @ContentChild(ChildContentComponent) contentChild: ChildContentComponent;

  /*Hàm này sẽ được gọi mỗi khi thay đổi các giá trị của @Input của Component*/
  ngOnChanges(changes: SimpleChanges): void {
  }

  /*Hàm này sẽ gọi duy nhất một lần khi khởi tạo xong Component.
  Khỏi tạo giá trị các biến gọi API, init form*/
  ngOnInit(): void {
    console.log(this.contentChild.name);
  }

  /*Phương thức này được gọi sau ngOnint và mỗi khi change detction chay*/
  public ngDoCheck() {
    console.log('do check');
    if (this.data.name === this.oldName) {
      return;
    }
    this.oldName = this.data.name;
    this.changeDetection.detectChanges();
  }

  /*Phương thưc này được gọi MỘT LẦN DUY NHẤT sau ngDoCheck()*/
  ngAfterContentInit(): void {
    console.log(this.contentChild.name);
  }

}
