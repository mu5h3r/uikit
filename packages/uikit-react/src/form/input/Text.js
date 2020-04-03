import React from 'react';
import Base from './Base.js';
import Icon from '../../core/Icon';
import Group from '../../core/Group';
import Label from '../../core/Label';

import '@mu5h3r/uikit/form/input/text.scss';

type Props = {
    type ?: string,
    onClick?: () => void,
    onChange?: () => void,
    className?: string
};

export default class Text extends React.Component<Props> {
    state = {
        focus: false,
        empty: true
    };

    render() {
        const { label, value, readOnly, suffix, prefix, error, onChange, onClick, type, className, style } = this.props;

        let classes = 'input-text';
        if (!value) classes += ' empty';
        if (suffix || prefix) classes += ' inline';
        if (className) classes += ` ${className}`;
        if (error) classes += ' error';

        return <Group style={style} className={`input-wrapper`}>
            <Base className={classes} onClick={onClick}>
                { prefix ? <div className="input-text__prefix">{prefix}</div> : null }
                <input type={type || 'text'}
                       readOnly={readOnly}
                       value={value || ''}
                       onChange={(e) => onChange(e.currentTarget.value)} />
                { this.props.children }
                { suffix ? <div className="input-text__suffix">{suffix}</div> : null }
                { error ? <div className="input-text__suffix input-text__error"><Icon>error</Icon></div>: null }
                { label ? <Label>{label}</Label> : null }
            </Base>
            { error ? <div className="error-text">{error}</div> : null }
        </Group>
    }
}