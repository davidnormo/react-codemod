'use strict';

var React = require('React');

class PureWithOtherNameClash extends React.Component {
  render() {
    const { props, ...rest } = this.props
    const props = 'foo'
    const a = { props: 'foo' }
    if (true) {
      const props = 1

      props + 1
    }

    return props.children
  }
}