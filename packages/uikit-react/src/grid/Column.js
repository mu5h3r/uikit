import React from 'react';

import '@mu5h3r/uikit/grid.scss';

export default function Column(props) {
    const { className, wrappable, ...customProps } = props;
    let classes = 'column';
    if (wrappable) classes += ' wrappable';
    if (className) classes += ' ' + className;
    return React.forwardRef((props, ref) => (
      <div ref={ref} className={classes} {...customProps}>{props.children}</div>
    ));
}