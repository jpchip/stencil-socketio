import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import io from 'socket.io-client';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentWillLoad() {
    const socket = io('https://test.syncarto.com/');
    socket.on('error', function(err) {
      console.error(err);
    });
  }
  
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  
  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
