import React from 'react';
import '@mu5h3r/uikit/core/panel.scss';

export default function Panel(props) {
  return <div className="row panel" style={props.style}>
    {props.children}
  </div>;
}