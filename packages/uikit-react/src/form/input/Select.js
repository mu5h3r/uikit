import React, { useEffect, useState } from 'react';
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
  onChange: any => void
}

const SelectInput = (props: Props) => {
  const { prefix, readOnly, values, multiple, options, onChange } = props;

  const [ selected, setSelected ] = useState();
  const [ version, setVersion ] = useState(0);
  const [ filter, setFilter ] = useState();
  const [ optionsVisible, showOptions ] = useState(false);
  const [ textValue, setTextValue ] = useState();

  // Use initial values if nothing selected.
  const selectedValues = selected || values || [];

  const handleClick = () => {
    if (readOnly !== true) {
      showOptions(!optionsVisible);
      setFilter('');
    }
  }

  const handleChange = (value, name) => {
    console.log('__CHANGE__');
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
    setFilter(undefined);
  };

  useEffect(() => {
    console.log('FILTER', filter);

    if (filter !== undefined) {
      setTextValue(filter);
    } else {
      setTextValue(
        options
          .filter(item => {
            if (selectedValues.length > 0) {
              return selectedValues.includes(item.value);
            }
            return false;
          })
          .reduce((accumulator, item, index) => (
            accumulator += `${index > 0 ? ', ' : ''}${item.name}`
          ), '')
      );
    }
  }, [filter, options, selectedValues]);

  return <div className="uikit-input-select">
    <TextField className="uikit-input-select__input"
          label={props.label}
          help={props.help}
          value={filter || textValue}
          prefix={prefix}
          suffix={<Column><Icon>arrow_drop_down</Icon><Icon>arrow_drop_up</Icon></Column>}
          readOnly={readOnly}
          onChange={value => setFilter(value.toLowerCase())}
          onClick={handleClick} />
      <Menu visible={optionsVisible} onClickOutside={() => showOptions(false)}>
        {
          options.filter(item => (
            (filter && item.name.toLowerCase().includes(filter)) || (!filter && true)
          )).map(option => {
            return <Option
              key={option.value}
              checkbox={multiple === true}
              checked={multiple === true && selectedValues.includes(option.value)}
              {...option}
              onClick={handleChange }>{option.name}</Option>
          })
        }
      </Menu>
  </div>
}

export default SelectInput;
