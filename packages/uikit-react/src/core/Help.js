import React from 'react';
import ReactTooltip from 'react-tooltip';

import '@mu5h3r/uikit/core/help.scss';

type Props = {
  text: string
}

export default function Help(props: Props) {
  const id = Math.random().toString(36).substr(2, 9);
  return <div data-tip='' data-for={id} className="help">
    ?
    <ReactTooltip id={id} type="light" border={true} className="tooltip">{props.text}</ReactTooltip>
  </div>
}