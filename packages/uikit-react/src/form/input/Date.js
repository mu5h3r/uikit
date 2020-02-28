import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru.js';

import Modal from '../../core/Modal.js';
import Text from './Text.js';
import Icon from '../../core/Icon';

import 'react-datetime/css/react-datetime.css';
import './style/date.scss';


export default class Date extends React.Component {
    state = {
        dateStart: moment().subtract(1, 'days'),
        dateEnd: moment(),
        show: false,
        type: null  // Тип выбираемой даты start/end
    };

    componentDidMount = () => {
        const { dateStart, dateEnd } = this.state;
        this.props.onChange(dateStart, dateEnd);
    };

    handleChange = (date) => {
        let { dateStart: start, dateEnd: end } = this.state;

        if (this.state.type === 'start') start = date;
        else if (this.state.type === 'end') end = date;
        else throw Error('Unknown date type', this.state.type);

        this.props.onChange(start, end);
        this.setState({dateStart: start, dateEnd: end, show: false});
    };

    toggleCalendar = (type) => {
        const { show } = this.state;
        this.setState({show: !show, type: type});
    };

    render() {
        const { show, dateStart, dateEnd } = this.state;
        moment.locale('ru');

        return <div className="date-input">
            <Text readOnly={true}
                  value={dateStart.format(moment.localeData().longDateFormat('L'))}
                  onClick={() => this.toggleCalendar('start')}
                  prefix=<Icon name="date_range" /> />
            &nbsp;–&nbsp;
            <Text readOnly={true}
                  value={dateEnd.format(moment.localeData().longDateFormat('L'))}
                  onClick={() => this.toggleCalendar('end')}
                  prefix=<Icon name="date_range" /> />

            {
                show
                ? <Modal onClose={this.toggleCalendar}>
                    <div className="date-input__calendar">
                        <Datetime input={false} locale="ru" timeFormat={false} onChange={this.handleChange} />
                    </div>
                  </Modal>
                : null
            }
        </div>;
    }
}