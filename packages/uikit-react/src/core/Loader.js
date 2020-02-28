import React from 'react';
import '@mu5h3r/uikit/core/loader.scss';

type Shape = 'square' | 'circle';
type Props = {
  shape?: Shape
}

export default function Loader(props: Props) {
  const {shape} = props;

  let spinnerStyle = {};
  if (shape === 'circle') {
    spinnerStyle['borderRadius'] = '50%';
  }

  return <div className="loader">
    <div className="loader__spinner">
      <div style={spinnerStyle}>{props.children}</div>
    </div>
  </div>
}
