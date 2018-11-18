import React, { Component, Fragment } from 'react';
import _ from 'lodash';

class Reveal extends Component {
  state = {
    reveal: false,
  };

  handleScroll = () => {
    console.log(this.isScrolledIntoView(this.element));
    if (!this.state.reveal && this.isScrolledIntoView(this.element)) {
      console.log('ignored');
      this.setState({ reveal: true });
    }
  };

  isScrolledIntoView = el => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  };

  componentDidMount = () => {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 150));
  };

  render() {
    return (
      <div
        className="reveal"
        ref={node => (this.element = node)}
        style={{ opacity: this.state.reveal ? 1 : 0 }}
      >
        {this.props.render(this.state.reveal)}
      </div>
    );
  }
}

export default Reveal;
