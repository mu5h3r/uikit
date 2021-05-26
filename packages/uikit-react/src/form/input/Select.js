// @flow
import React, { useState } from 'react';
import Column from '../../grid/Column';
import Icon from '../../core/Icon';
import Menu from '../../core/Menu';
import TextField from './Text';

import '@mu5h3r/uikit/form/input/select.scss';

type OptionProps = {
  children: any,
  value: any,
  checkbox?: boolean,
  checked?: boolean,
  onClick: (any, any) => void
}

export function Option(props: OptionProps) {
  const { children, checkbox, checked, value, onClick } = props;
  return <Menu.Item onClick={() => onClick(value, children)}>
    { checkbox ? <input type="checkbox" checked={checked} onChange={() => null} /> : null }
    { props.children }
  </Menu.Item>
}

type Props = {
  label: String,
  options: any,
  multiple?: boolean,
  onChange: (any) => void
}

const SelectInput = (props: Props) => {
  const [ selected, setSelected ] = useState([]);
  const [ version, setVersion ] = useState(0);
  const [ menu, showMenu ] = useState(false);
  const { multiple, options, onChange } = props;

  const handleChange = (value, name) => {
    const newValue = {name: name, value: value};
    let values = selected;
    if (multiple)  {
      if (selected.find(item => value === item.value) === undefined) selected.push(newValue);
      else values = values.filter((item) => item.value !== value);
    } else values = [newValue];
    onChange(values);
    setSelected(values);
    setVersion(version + 1);
  };

  const values = selected ? selected.reduce((accumulator, item) => {
    if (accumulator) accumulator += ', ';
    accumulator += item.name;
    return accumulator;
  }, '') : null;

  return <div className="uikit-input-select">
    <TextField className="uikit-input-select__input"
          suffix={<Column><Icon>arrow_drop_down</Icon><Icon>arrow_drop_up</Icon></Column>}
          value={values}
          label={props.label}
          onClick={() => showMenu(!menu)} >

      <Menu visible={menu} onClickOutside={() => showMenu(false)}>
        {
          options.map((option, key) => {
            return <Option
              key={key}
              checkbox={multiple === true}
              checked={multiple === true && selected.find(item => option.value === item.value) !== undefined}
              {...option}
              onClick={handleChange}>{option.name}</Option>
          })
        }
      </Menu>
    </TextField>
  </div>
}

export default SelectInput;
