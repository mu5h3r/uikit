import React from 'react';

import './style/base.scss';

export default class Base extends React.Component {
    render() {
        const { className, title, onClick } = this.props;
        let classes = ['input-base'];
        if (className) classes.push(className);

        return <div className={classes.join(' ')} title={title} onClick={onClick}>
            {this.props.children}
        </div>;
    }
}