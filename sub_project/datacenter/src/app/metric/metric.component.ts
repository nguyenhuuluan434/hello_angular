import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {
  /*@Input annotation define a property as an input*/
  /*the property with @Input decorator made available for binding*/
  /*no bindingPropertyName meaning @Input(), binding based on the name of the property*/
  @Input() title = '';
  @Input() description = '';
  /*Input decorator with bindingPropertyName,@Input('propertyName') allow us to alias the propertyName */
  /* [key]="valueBinding"*/
  /*rename the input can be benefically for code clarity*/
  // tslint:disable-next-line:no-input-rename
  /*@Input('used') private value = 0;*/
  // tslint:disable-next-line:no-input-rename
  /*@Input('available') private max = 100;*/
  /*component API is the primary way for passing data into component*/
  /*use setter to intercept data binding*/
  private _value = 0;
  private _max = 100;

  get value(): number {
    return this._value;
  }

  /*Setter method for value with Input decorator*/
  @Input('used')
  set value(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }

  get max(): number {
    return this._max;
  }

  /*Setter method for value with Input decorator*/
  @Input('available')
  set max(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this._max = max;
  }

  isDanger() {
    return this._value / this._max >= 0.7;
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*lifecycle hook to validate inputs*/
    if (changes.value && isNaN(changes.value.currentValue)) {
      this._value = 0;
    }
    if (changes.max && isNaN(changes.max.currentValue)) {
      this._max = 100;
    }
  }

}
