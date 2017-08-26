import { Component } from '@angular/core';
import { CustomValueAccessor, customControlProviderFactory } from '../../lib/custom-control-helpers';

@Component({
  selector: 'demo-date',
  templateUrl: './demo-date.component.html',
  styleUrls: ['./demo-date.component.scss'],
  providers: [
    customControlProviderFactory(DemoDateComponent)
  ]
})
export class DemoDateComponent extends CustomValueAccessor<Date> {

  _inner: string;

  writeValue(value: string) {
    this.value = value ? new Date(value) : new Date();
  }

  onModelChange(value: string) {
    this.value = value ? new Date(value) : new Date();
  }
}
