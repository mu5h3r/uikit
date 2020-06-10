import React from 'react';

import '@mu5h3r/uikit/grid.scss';

type Props = {
    className?: string,
    wrappable?: boolean
}

export default function Column(props: Props) {
    const { className, wrappable, ...customProps } = props;
    const classes = ['uikit-column'];
    if (wrappable) classes.push('uikit-wrappable');
    if (className) classes.push(className);
    return <div className={classes.join(' ')} {...customProps}>{props.children}</div>;
}