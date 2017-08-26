import { Component } from '@angular/core';
import { CustomValueAccessor, customControlProviderFactory } from '../../lib/custom-control-helpers';

@Component({
  selector: 'demo-text',
  templateUrl: './demo-text.component.html',
  styleUrls: ['./demo-text.component.scss'],
  providers: [
    customControlProviderFactory(DemoTextComponent)
  ]
})
export class DemoTextComponent extends CustomValueAccessor<string> {

  _inner: string;

  writeValue(value: string) {
    this.value = value;
  }

  onModelChange(value: string) {
    this.writeValue(value);
  }
}
