import React from 'react';

import './style/grid.scss';

export default function Column(props) {
    const { className, ...customProps } = props;
    let classes = 'column';
    if (className) classes += ' ' + className;
    return <div className={classes} {...customProps}>{props.children}</div>;
}