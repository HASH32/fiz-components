import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'fiz-hello',
  styleUrl: 'hello-component.css',
  shadow: true
})
export class HelloComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <span>Hello, {this.getText()}</span>;
  }
}
