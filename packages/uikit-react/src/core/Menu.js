// @flow
import React, { useState } from 'react';
import TextField from '../form/input/Text';
import Icon from '../core/Icon';
import Column from '../grid/Column';

import '@mu5h3r/uikit/core/menu.scss';

type MenuOptionProps = {
  children: any,
  value: any,
  onClick: () => void
}

export function MenuOption(props: MenuOptionProps) {  
  const { value, onClick } = props;
  return <div className="menu__option" onClick={() => onClick(value, props.children)}>{props.children}</div>
}

type MenuProps = {
  selected: any,
  options: any,
  onChange: (any) => void
}

export default function Menu(props: MenuProps) {  
  const { selected, options, onChange } = props;

  const handleChange = (value, name) => {    
    onChange([{name: name, value: value}]);
  }

  return <div className="menu empty">
    <TextField className="menu__input" 
        suffix={<Column><Icon name="arrow_drop_down" /><Icon name="arrow_drop_up" /></Column>}
        value={selected ? selected[0].name : null} >
      <div className="menu__options column">
        { options.map((item, key) => <MenuOption key={key} {...item} onClick={handleChange}>{item.name}</MenuOption>) }
      </div>
    </TextField>
  </div>
}