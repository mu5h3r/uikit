import React from 'react';
import '@mu5h3r/uikit/core/group.scss';

export default function Group(props) {
  return <div className={props.className ? `group ${props.className}` : 'group'}>{props.children}</div>;
}