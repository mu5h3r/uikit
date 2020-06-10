import React from 'react';
import '@mu5h3r/uikit/core/group.scss';

type Props = {
  className ?: String,
  wrappable ?: Boolean
}

export default function Group(props: Props) {
  const classes = ['uikit-group'];
  if (props.className) classes.push(props.className);
  if (props.wrappable) classes.push('uikit-wrappable');
  return <div className={classes.join(' ')} style={props.style}>{props.children}</div>;
}