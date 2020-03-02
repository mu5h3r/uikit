import React from 'react';

import '@mu5h3r/uikit/core/app-bar.scss';

type Props = {
  inline?: boolean
}

export default class AppBar extends React.Component<Props> {
  render() {
    const {inline, className} = this.props;

    let classes = ['app-bar'];
    classes.push(inline === true || inline === undefined ? 'row' : 'column');
    if (className) classes.push(className);

    return <div className={classes.join(' ')}>
      {this.props.children}
    </div>;
  }
}