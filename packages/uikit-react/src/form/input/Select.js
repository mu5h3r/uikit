// @flow
import React, { useState } from 'react';
import TextField from './Text';
import Icon from '../../core/Icon';
import Column from '../../grid/Column';

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
  return <div className="uikit-input-select__option" onClick={() => onClick(value, children)}>
    { checkbox ? <input type="checkbox" checked={checked} onChange={() => null} /> : null }
    { props.children }
  </div>
}

type Props = {
  options: any,
  multiple?: boolean,
  onChange: (any) => void
}

export default function Select(props: Props) {
  const [selected, setSelected] = useState([]);
  const [valueVersion, setValueVersion] = useState(0);
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
    setValueVersion(valueVersion + 1);
  };

  const values = selected ? selected.reduce((acc, item) => {
    if (acc) acc += ', ';
    acc += item.name;
    return acc;
  }, '') : null;

  return <div className="uikit-input-select">
    <TextField className="uikit-input-select__input"
        suffix={<Column><Icon>arrow_drop_down</Icon><Icon>arrow_drop_up</Icon></Column>}
        value={values}>
      <Column className="uikit-input-select__options">
        { options.map((option, key) => {
          return <Option
            key={key}
            checkbox={multiple === true}
            checked={multiple === true && selected.find(item => option.value === item.value) !== undefined}
            {...option}
            onClick={handleChange}>{option.name}</Option>
        })}
      </Column>
    </TextField>
  </div>
}