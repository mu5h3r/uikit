import React from 'react';
import Base from './Base.js';

import './style/text.scss';

type Props = {
    type ?: string,
    onClick?: () => void,
    onChange?: () => void,
};

export default class Text extends React.Component<Props> {
    state = {
        focus: false,
        empty: true
    };

    toggleFocus = () => {
        this.setState({ focus: !this.state.focus });
    };

    render() {
        const { value, readOnly, suffix, prefix, onChange, onClick, type } = this.props;

        let classes = 'input-base input-text';
        if (this.state.focus) classes += ' focus';
        if (!value) classes += ' empty';
        if (suffix || prefix) classes += ' inline';

        return <Base className={classes} onClick={onClick}>
            { prefix ? <div className="input-text__prefix">{prefix}</div> : null }

            <input type={type || 'text'}
                   readOnly={readOnly}
                   value={value || ''}
                   onChange={(e) => onChange(e.currentTarget.value)}
                   onFocus={this.toggleFocus}
                   onBlur={this.toggleFocus}
            />
            { suffix ? <div className="input-text__suffix">{suffix}</div> : null }
        </Base>
    }
}