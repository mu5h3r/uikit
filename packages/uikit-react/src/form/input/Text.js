import React from 'react';
import Base from './Base.js';
import Icon from '../../core/Icon';
import Group from '../../core/Group';
import Label from '../../core/Label';

import '@mu5h3r/uikit/form/input/text.scss';

type Props = {
    autoFocus ?: boolean,
    type ?: string,
    className?: string,
    onClick?: () => void,
    onChange?: () => void
};

export default function (props: Props) {
    const { type, autoFocus, className, style, help, label, value, readOnly, suffix, prefix, error, onChange, onClick } = props;

    let classes = 'uikit-input-text';
    if (!value) classes += ' empty';
    if (suffix || prefix) classes += ' inline';
    if (className) classes += ` ${className}`;
    if (error) classes += ' error';

    return <Group style={style} className={`uikit-input-wrapper`}>
        <Base className={classes} onClick={onClick}>
            { prefix ? <div className="uikit-input__prefix">{prefix}</div> : null }
            <input type={type || 'text'}
                   autoFocus={autoFocus || false}
                   readOnly={readOnly}
                   value={value || ''}
                   onChange={(e) => onChange(e.currentTarget.value)} />
            { props.children }
            { suffix ? <div className="uikit-input__suffix">{suffix}</div> : null }
            { error ? <div className="uikit-input__suffix"><Icon>error</Icon></div>: null }
            { label ? <Label>{label}</Label> : null }
        </Base>
        { help ? <div className="help-text">{help}</div> : null }
        { error ? <div className="error-text">{error}</div> : null }
    </Group>
}