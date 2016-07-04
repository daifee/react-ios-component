/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import Layout from '../../components/layout';
import {
	Button,
	Alert
} from 'component';

export default function AlertPage(props) {
	return (
		<Layout title="alert" history={props.history}>
			
			<br/>
			<Button size="lg">alert</Button>
			<Alert 
				title="title title title title title title title title title" 
				body="测试 body"
				buttons={[
					{
						children: 'first btn'
					},
					{
						children: 'second btn'
					},
					{
						children: 'three btn'
					}
				]}
			>
			</Alert>

			<br/>
			<Button size="lg">confirm</Button>
			
		</Layout>
	);
}