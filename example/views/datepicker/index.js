/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  Button,
  InlineDatePicker,
  DatePicker
} from 'component';

export default class DatePickerPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedDate: new Date()
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      selectedDate
    } = this.state;
    console.log(selectedDate);

    return (
      <Layout title='datepicker' history={history}>
        <br />
        <InlineDatePicker
          maxDate={new Date('2020-10-10')}
          minDate={new Date('1970-01-01')}
          selectedDate={selectedDate}
          onChange={(selectedDate) => {
            this.setState({selectedDate});
          }}
        />
        <br />
        <Button size='lg' onClick={() => {
          DatePicker.show({
            maxDate: new Date('2020-10-10'),
            minDate: new Date('1970-01-01'),
            selectedDate: selectedDate,
            onConfirm: selectedDate => {
              this.setState({selectedDate});
            }
          });
        }}>
          API 调用 Picker
        </Button>
      </Layout>
    );
  }
}

DatePickerPage.propTypes = {
  history: PropTypes.object
};
