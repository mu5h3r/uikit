import React from 'react';
import './style/label.css';

type Props = {
    children: string,
    className?: string,
    backgroundColor?: string,
    size?: 'small' | 'normal'
}

export default function Label(props: Props) {
    let classes = "label";
    if (props.className)
        classes = `${classes} ${props.className}`;
    return <div className={classes} data-content={props.children}>{props.children}</div>
}