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
  InlineTimePicker,
  TimePicker
} from 'component';

export default class TimePickerPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedTime: '12:12:12'
    }
  }

  render() {
    const {
      history
    } = this.props;
    const {
      selectedTime
    } = this.state;
    console.log(selectedTime);

    return (
      <Layout title="timepicker" history={history}>
        <br/>
        
        <InlineTimePicker 
          maxTime={'23:59:59'}
          minTime={'00:00:00'}
          selectedTime={selectedTime}
          onChange={(selectedTime) => {
            this.setState({selectedTime});
          }}
        />
        
        <br/>

        <Button size="lg" onClick={() => {
          TimePicker.show({
            selectedTime: selectedTime,
            onConfirm: (selectedTime, e) => {
              this.setState({selectedTime});
            }
          });
        }}>
          API 调用 Picker
        </Button>
        
      </Layout>
    );
  }
}