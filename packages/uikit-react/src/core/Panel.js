import React from 'react';

import './style/panel.scss';

export default function Panel(props) {
    return <div className="row panel" style={props.style}>
        { props.children }
    </div>;
}