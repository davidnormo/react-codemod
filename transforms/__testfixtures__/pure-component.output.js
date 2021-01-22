'use strict';

var React = require('React');

function PureWithOtherNameClash(props) {
  const { props2, ...rest } = props
  const a = { props: 'foo' }
  if (true) {
    const props = 1

    props + 1
  }

  return props2.children;
}