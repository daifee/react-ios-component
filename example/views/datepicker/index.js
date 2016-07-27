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
	InlineDatePicker
} from 'component';

export default class PickerPage extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedDate: new Date()
		}
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
			<Layout title="indicator" history={history}>
				<br/>
				
				<InlineDatePicker 
					maxDate={new Date('2020-10-10')}
					minDate={new Date('1970-01-01')}
					selectedDate={selectedDate}
					onChange={(selectedDate) => {
						this.setState({selectedDate});
					}}
				/>
				
				<br/>

				<Button size="lg" onClick={() => {
					
				}}>
					API 调用 Picker
				</Button>
				
			</Layout>
		);
	}
}