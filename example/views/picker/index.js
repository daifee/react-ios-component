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
	InlinePicker,
	Picker
} from 'component';

export default class PickerPage extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const {
			history
		} = this.props;

		return (
			<Layout title="indicator" history={history}>
				<br/>

				<Button size="lg" onClick={() => {
					
				}}>
					API 调用 Picker
				</Button>
				<br/>
				
				<InlinePicker title="选择器">
				</InlinePicker>
				
				<br/>
				
			</Layout>
		);
	}
}