import { Component, Prop } from '@stencil/core';
import distanceInWords from 'date-fns/distance_in_words'

@Component({
  tag: 'fiz-time-ago',
  styleUrl: 'time-ago-component.css',
  shadow: true
})
export class TimeAgoComponent {
  @Prop() dateObj: Date;

  private getText(): string {

    return distanceInWords(new Date(), this.dateObj || new Date());
  }

  render() {
    return <span>{this.getText()} ago</span>;
  }
}
