import React from 'react';
import Modal from "../../core/Modal";
import Button from "../Button";
import Base from './Base.js';

import '@mu5h3r/uikit/form/input/select.scss';

type Option = {
  name: string,
  value: string
}

type Props = {
  multiple?: boolean,
  options: Option[],
  onChange: (Option) => void
}

export default class Select extends React.Component<Props> {
  state = {
    modal: false,
    values: []
  };

  inputClick = () => {
    this.setState({modal: true});
  };

  valueChange = (value) => {
    const {multiple} = this.props;
    let {values} = this.state;

    if (multiple) {
      const index = values.findIndex(item => item.value === value.value);
      if (index > -1)
        values.splice(index, 1);
      else
        values.push(value);
    } else {
      if (values.length > 0 && values[0].value === value.value)
        values = [];
      else
        values = [value];
    }

    this.setState({values: values});
  };

  handleSubmit = () => {
    const {multiple, onChange} = this.props;
    const {values} = this.state;
    if (multiple)
      onChange(values);
    else
      onChange(values[0]);
    this.setState({modal: false});
  };

  handleReset = () => {
    const {onChange} = this.props;
    onChange([]);
    this.setState({modal: false, values: []});
  };

  handleModalClose = () => {
    this.setState({modal: false});
  };

  isChecked = (value) => {
    const {values} = this.state;
    return !!values.find(item => value.value === item.value);
  };

  render() {
    const {options} = this.props;
    const {modal, values} = this.state;

    return <div className={values.length > 0 ? 'input-select' : 'input-select empty'}>
      <Base className='input-select__values'
            value={values.map(item => <div key={item['value']}>{item['name']}</div>)}
            onClick={() => this.inputClick()}>
        {values ? values.map(item => <div key={item['value']}>{item['name']}</div>) : null}
      </Base>

      {
        modal ?
          <Modal onClose={this.handleModalClose}>
            <div className="input-select__options column">
              {
                options.map((item) => (
                  <div className="row" key={item['value']}>
                    <label className="row">
                      <input id={`option-${item['value']}`}
                             onChange={() => this.valueChange(item)}
                             type="checkbox"
                             checked={this.isChecked(item) ? 'checked' : ''}/>
                      <div>{item['name']}</div>
                    </label>
                  </div>
                ))
              }
              <div className="input-select__buttons row">
                <Button className="input-select__button-reset" onClick={this.handleReset}>
                  Сбросить
                </Button>
                <Button className="input-select__button-apply" onClick={this.handleSubmit}>
                  Применить
                </Button>
              </div>
            </div>
          </Modal>
          : null
      }
    </div>
  }
}