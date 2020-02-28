import React from 'react';

import './style/button.scss';

type Props = {
    className?: string,
    type?: 'text' | 'outlined' | 'contained',
    children: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: () => void
}

export default function Button(props: Props) {
    const {className, type, children, disabled, active, onClick} = props;

    const classes = ['button', `button-${type || 'contained'}`];
    if (className) classes.push(className);
    if (disabled) classes.push('disabled');
    if (active) classes.push('active');

    return <div className={classes.join(' ')} onClick={onClick}>{children}</div>;
}