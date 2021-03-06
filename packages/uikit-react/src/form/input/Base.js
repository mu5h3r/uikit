import React from 'react';

import '@mu5h3r/uikit/form/input/base.scss';

export default class Base extends React.Component {
  render() {
    const {className, title, onClick} = this.props;
    let classes = ['uikit-input'];
    if (className) classes.push(className);

    return <div className={classes.join(' ')} title={title} onClick={onClick}>
      {this.props.children}
    </div>
  }
}