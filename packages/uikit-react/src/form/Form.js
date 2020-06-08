import React from 'react';

import '@mu5h3r/uikit/form/form.scss';

export default function (props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    }

    const classes = ['uikit-form'];
    if (props.className) classes.push(props.className);

    return <form className={classes.join(' ')} onSubmit={handleSubmit}>{props.children}</form>;
}