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
	CellFooter,
	Checkbox,
	Radio,
	Input,
	Switch,
	Textarea,
	Stepper
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

				<CellsTitle>stepper</CellsTitle>
				<Cells>
					<Cell>
						<CellBody>我是标题</CellBody>
						<CellFooter>
							<Stepper onChange={(current, preValue, step) => {
								console.log(current, preValue, step);
							}} />
						</CellFooter>
					</Cell>
				</Cells>

				<CellsTitle>switch</CellsTitle>
				<Cells>
					<Cell>
						<CellBody>我是标题</CellBody>
						<CellFooter>
							<Switch />
						</CellFooter>
					</Cell>
				</Cells>

				<CellsTitle>checkbox</CellsTitle>
				<Cells>
					<Cell component="label">
						<CellHeader>
							<Checkbox name="checkbox" defaultChecked/>
						</CellHeader>
						<CellBody>我是标题</CellBody>
					</Cell>
					<Cell component="label">
						<CellHeader>
							<Checkbox name="checkbox" />
						</CellHeader>
						<CellBody>我是标题</CellBody>
					</Cell>
				</Cells>

				<CellsTitle>radio</CellsTitle>
				<Cells>
					<Cell component="label">
						<CellHeader>
							<Radio name="radio" defaultChecked/>
						</CellHeader>
						<CellBody>我是标题</CellBody>
					</Cell>
					<Cell component="label">
						<CellHeader>
							<Radio name="radio" />
						</CellHeader>
						<CellBody>我是标题</CellBody>
					</Cell>
				</Cells>

				<CellsTitle>input</CellsTitle>
				<Cells>
					<Cell>
						<CellHeader>手机号码</CellHeader>
						<CellBody>
							<Input placeholder="请输入手机号码" />
						</CellBody>
					</Cell>
				</Cells>

				<CellsTitle>textarea</CellsTitle>
				<Cells>
					<Cell>
						<CellBody>
							<Textarea placeholder="请输入手机号码" />
						</CellBody>
					</Cell>
				</Cells>
			</Layout>
		);
	}

}