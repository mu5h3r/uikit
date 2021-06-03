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
  values: any, // Initial values
  options: any,
  multiple?: boolean,
  onChange: (any) => void
}

const SelectInput = (props: Props) => {
  const { prefix, readOnly, values, multiple, options, onChange } = props;

  const [ selected, setSelected ] = useState();
  const [ version, setVersion ] = useState(0);
  const [ optionsVisible, showOptions ] = useState(false);

  const handleChange = (value, name) => {
    let values = [];

    if (multiple) {
      if (selected === undefined) {
        values.push(value);
      } else if (selected.find(item => value === item) === undefined) {
        values = selected;
        values.push(value);
      } else {
        values = selected.filter((item) => item !== value);
      }
    } else {
      values.push(value);
    }

    setSelected(values);
    showOptions(false);
    setVersion(version + 1);
    onChange(values);
  };

  // Use initial values if nothing selected.
  const selectedValues = selected || values || [];
  const textValue = options.filter(item => selectedValues.includes(item.value))
    .reduce((accumulator, item, index) => (
      accumulator += `${index > 0 ? ', ' : ''}${item.name}`
    ), '');

  return <div className="uikit-input-select">
    <TextField className="uikit-input-select__input"
          label={props.label}
          help={props.help}
          value={textValue}
          prefix={prefix}
          suffix={<Column><Icon>arrow_drop_down</Icon><Icon>arrow_drop_up</Icon></Column>}
          readOnly={readOnly}
          onClick={() => readOnly !== true && showOptions(!optionsVisible)}></TextField>
      <Menu visible={optionsVisible} onClickOutside={() => showOptions(false)}>
        {
          options.map((option, key) => {
            return <Option
              key={key}
              checkbox={multiple === true}
              checked={multiple === true && selectedValues.includes(option.value)}
              {...option}
              onClick={handleChange}>{option.name}</Option>
          })
        }
      </Menu>
  </div>
}

export default SelectInput;
