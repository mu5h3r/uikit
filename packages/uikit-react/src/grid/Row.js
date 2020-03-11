import React from 'react';

import '@mu5h3r/uikit/grid.scss';

type Props = {
    className?: string,
    wrappable?: boolean
}

export default function Row(props: Props) {
    const { className, wrappable, ...customProps } = props;
    let classes = 'row';
    if (wrappable) classes += ` wrappable`;
    if (className) classes += ` ${className}`;
    return <div className={classes} {...customProps}>{props.children}</div>;
}