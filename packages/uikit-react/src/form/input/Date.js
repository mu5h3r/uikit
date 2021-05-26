// @flow
import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru.js';

import Modal from '../../core/Modal.js';
import Text from './Text.js';
import Icon from '../../core/Icon';

import 'react-datetime/css/react-datetime.css';
import '@mu5h3r/uikit/form/input/date.scss';

const DateInput = (props) => {
  const [ dateStart, setDateStart ] = useState(moment().subtract(1, 'days'));
  const [ dateEnd, setDateEnd ] = useState(moment());
  const [ calendarVisible, showCalendar ] = useState(false);
  const [ type, setType ] = useState();

  const { onChange } = props;

  useEffect(() => {
    onChange(dateStart, dateEnd);
  }, []);

  const handleChange = (date) => {
    let start = dateStart;
    let end = dateEnd;

    if (type === 'start') {
      start = date;
    } else if (type === 'end') {
      end = date;
    } else {
      throw Error('Unknown date type', type);
    }

    onChange(start, end);

    setDateStart(start);
    setDateEnd(end);
    showCalendar(false);

    // this.setState({dateStart: start, dateEnd: end, calendarVisible: false});
  };

  const toggleCalendar = (type) => {
    showCalendar(!calendarVisible);
    setType(type);
  };


  // const {calendarVisible, dateStart, dateEnd} = this.state;
  moment.locale('ru');

  return (
    <div className="date-input">
      <Text readOnly={true}
            value={dateStart.format(moment.localeData().longDateFormat('L'))}
            onClick={() => toggleCalendar('start')}
            prefix={<Icon>date_range</Icon>} />
      &nbsp;–&nbsp;
      <Text readOnly={true}
            value={dateEnd.format(moment.localeData().longDateFormat('L'))}
            onClick={() => toggleCalendar('end')}
            prefix={<Icon>date_range</Icon>} />

      <Modal visible={calendarVisible} onClose={toggleCalendar}>
        <div className="date-input__calendar">
          <Datetime input={false} locale="ru" timeFormat={false} onChange={handleChange}/>
        </div>
      </Modal>
    </div>
  );
}

export default DateInput;