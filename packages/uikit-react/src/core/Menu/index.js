import React, { useEffect, useRef } from 'react';
import Column from '../../grid/Column';

import '@mu5h3r/uikit/core/menu.scss';

const MenuItem = props => {
    const { key, className, value, onClick } = props;
    const classes = ['uikit-menu__option'];
    if (className) {
        classes.push(className);
    }

    return (
        <div key={key} className={classes.join(' ')} onClick={() => onClick && onClick(value)}>
            {props.children}
        </div>
    );
};

const Menu = props => {
    const { visible, onClickOutside } = props;
    const wrapper = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (visible === true && wrapper.current && !wrapper.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        }

        if (visible === true) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [wrapper, visible, onClickOutside]);

    let classes = ['uikit-menu'];
    if (visible !== true) {
        classes.push('uikit-invisible');
    }

    return (
        <Column ref={wrapper} className={classes.join(' ')}>
            {props.children}
        </Column>
    );
}

Menu.Item = MenuItem;
export default Menu;
