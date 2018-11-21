import React, { Component, Fragment } from 'react';
import _ from 'lodash';

// TODO: add JSS to give this.props.children or this.props.render default transition styles
class Reveal extends Component {
  state = {
    reveal: false,
  };

  handleScroll = () => {
    const { reveal } = this.state;
    const { element } = this;

    if (!reveal && this.isScrolledIntoView(element)) {
      this.setState({ reveal: true });
    }
  };

  isScrolledIntoView = el => {
    const { element } = this;
    if (element) {
      var rect = element.getBoundingClientRect();
      const { top, bottom } = rect;

      // Only completely visible elements return true:
      var isVisible = top >= 0 && bottom <= window.innerHeight;
      // Partially visible elements return true:
      //isVisible = top < window.innerHeight && bottom >= 0;
      return isVisible;
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 150));
  };

  render() {
    const { reveal } = this.state;

    const props = {
      reveal,
      style: {
        opacity: reveal ? 1 : 0,
      },
    };

    return (
      <Fragment>
        <div
          className="reveal"
          ref={node => (this.element = node)}
          style={{ opacity: this.state.reveal ? 1 : 0 }}
        >
          {(this.props.children && this.props.children(props)) ||
            (this.props.render && this.props.render(props))}
        </div>
      </Fragment>
    );
  }
}

export default Reveal;
