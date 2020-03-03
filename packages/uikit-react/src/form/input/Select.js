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
  onClick: () => void
}

export function Option(props: OptionProps) {
  const { children, checkbox, checked, value, onClick } = props;

  console.log('Checked', checked, 'Value', value);

  return <div className="input-select__option" onClick={() => onClick(value, children)}>
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

  return <div className="input-select">
    <TextField className="input-select__input"
        suffix={<Column><Icon name="arrow_drop_down" /><Icon name="arrow_drop_up" /></Column>}
        value={values}>
      <div className="input-select__options column">
        { options.map((option, key) => {
          console.log(selected.find(item => option.value === item.value) !== undefined);
          return <Option
            key={key}
            checkbox={multiple === true}
            checked={multiple === true && selected.find(item => option.value === item.value) !== undefined}
            {...option}
            onClick={handleChange}>{option.name}</Option>
        })}
      </div>
    </TextField>
  </div>
}