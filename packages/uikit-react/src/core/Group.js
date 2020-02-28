import React from 'react';
import './style/group.css';

export default function Group(props) {
    return <div className={props.className ? `group ${props.className}` : 'group'}>{props.children}</div>;
}