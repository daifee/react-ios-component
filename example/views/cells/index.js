/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Layout from '../../components/layout';
import {
	Icon,
	CellsTitle,
	Cells,
	Cell,
	CellHeader,
	CellBody,
	CellDesc,
	CellFooter
} from 'component';

export default class SegmentedPage extends Component {

	constructor(props, context) {
		super(props, context);

		
	}

	render() {
		const {
			history
		} = this.props;

		return (
			<Layout
				className="rc-ios-tabbar-fixed"
				title="cells"
				history={history}
			>
				<CellsTitle>cells</CellsTitle>
				<Cells>
					<Cell>label</Cell>
					<Cell>
						<CellHeader>
							<Icon value="settings"></Icon>
						</CellHeader>
						<CellBody>body</CellBody>
						<CellFooter>footer</CellFooter>
					</Cell>
					<Cell component="a">
						<CellHeader>icon</CellHeader>
						<CellBody>body</CellBody>
						<CellFooter>footer</CellFooter>
					</Cell>
					<Cell component="a">
						<CellHeader>icon</CellHeader>
						<CellBody>
							<span>Changes</span>
							<CellDesc>the desc the desc the desc the desc the desc</CellDesc>
						</CellBody>
						<CellFooter>footer</CellFooter>
					</Cell>
				</Cells>
			</Layout>
		);
	}

}