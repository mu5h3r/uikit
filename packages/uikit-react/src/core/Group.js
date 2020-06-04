import React from 'react';
import '@mu5h3r/uikit/core/group.scss';

export default function Group(props) {
  return <div className={props.className ? `uikit-group ${props.className}` : 'uikit-group'} style={props.style}>{props.children}</div>;
}