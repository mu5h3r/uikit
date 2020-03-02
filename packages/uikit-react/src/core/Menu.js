import React, { useState } from 'react';
import TextField from '../form/input/Text';

import '@mu5h3r/uikit/core/menu.scss';

type MenuOptionProps = {
  name: string,
  value: any,
  onClick: () => void
}

export function MenuOption(props: MenuOptionProps) {
  const { name, value, onClick } = props;
  return <div className="menu__option" onClick={() => onClick(value, name)}>{name}</div>
}

export default function Menu(props) {
  const [active, setActive] = useState();
  const { options, onChange } = props;

  let classes = 'menu';
  if (active) classes += ' active';

  return <div className={classes}>
    <TextField className="menu__input" onClick={() => active ? setActive(false) : setActive(true)}>
      <div className="menu__options column">
        { options.map((item, key) => <MenuOption key={key} {...item} onClick={onChange}>{item.name}</MenuOption>) }
      </div>
    </TextField>
  </div>
}