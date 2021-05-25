import React from 'react';

import '@mu5h3r/uikit/grid.scss';

type Props = {
    className?: string,
    wrappable?: boolean
}

const Column = React.forwardRef((props: Props, ref) => {
    const { className, wrappable, ...customProps } = props;

    const classes = ['uikit-column'];
    if (wrappable) classes.push('uikit-wrappable');
    if (className) classes.push(className);

    return (
        <div ref={ref} className={classes.join(' ')} {...customProps}>
            {props.children}
       </div>
    );
});

export default Column;
