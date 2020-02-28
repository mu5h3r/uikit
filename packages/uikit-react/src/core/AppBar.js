import React from 'react';

import './style/app-bar.scss';

type Props = {
    inline?: boolean
}

export default class AppBar extends React.Component<Props> {
    render() {
        const { inline } = this.props;

        let classes = ['app-bar'];
        classes.push(inline ? 'row' : 'column');

        return <div className={classes.join(' ')}>
            { this.props.children }
        </div>;
    }
}