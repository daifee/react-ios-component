/**
 * @author haw
 */

import React, {
	PropTypes
} from 'react';
import Layout from '../../components/layout';
import {
	Button
} from 'component';

export default function ButtonPage(props) {
	return (
		<Layout title="button" history={props.history}>
			<br />
			<Button>保存</Button>
			<Button fill={true}>保存</Button>
			<Button color="red">保存</Button>
			<Button color="red" fill={true}>保存</Button>
			<Button color="gray">保存</Button>
			<Button fill={true} color="gray">保存</Button>

			<br />
			<br />
			<Button size="lg">保存</Button>
			<br />
			<Button size="lg" color="red">保存</Button>
			<br />
			<Button size="lg" color="red" fill={true}>保存</Button>
			<br />
			<Button size="lg" color="green" fill={true}>保存</Button>
			<br />
			<Button size="lg" color="green" fill={true} disabled={true}>保存</Button>
		</Layout>
	);
}