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
	Alert,
	Confirm
} from 'component';

export default class AlertPage extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			alertVisible: false,
			confirmVisible: false
		}
	}
	
	render() {
		const {
			history
		} = this.props;
		const {
			alertVisible,
			confirmVisible
		} = this.state;

		return (
			<Layout title="alert" history={history}>
				<br/>

				<Button size="lg" onClick={() => {
					Alert.show({
						title: "title title title title title title title title title", 
						body: "测试 body",
						buttons: [
							{
								children: 'first btn'
							},
							{
								children: 'second btn'
							},
							{
								children: 'three btn'
							}
						]
					});
				}}>
					API 调用 Alert
				</Button>
				
				<br/>
				{/**/}
				<Button size="lg" onClick={() => {
					this.setState({alertVisible: !alertVisible});
				}}>alert</Button>
				<Alert 
					visible={alertVisible}
					title="title title title title title title title title title" 
					body="测试 body"
					buttons={[
						{
							children: 'ok btn',
							onClick: () => {
								this.setState({alertVisible: !alertVisible});
							}
						}
					]}
				/>

				<br/>
				<Button size="lg" onClick={() => {
					Confirm.show({
						title: 'confirm',
						body: 'are you sure?',
						onOkHide: () => {
							console.log('onOkHide');
						},
						onCancelHide: () => {
							console.log('onCancelHide');
						},
						okText: '好的',
						cancelText: '不要啊'
					});
				}}>API 调用 Confirm</Button>

				<br/>
				<Button size="lg" onClick={() => {
					this.setState({confirmVisible: !confirmVisible});
				}}>confirm</Button>
				<Confirm
					visible={confirmVisible}
					title={'go to hell'}
					body={'are you ready?'}
					onOkHide={() => {
						console.log('onOkHide');
						this.setState({confirmVisible: !confirmVisible});
					}}
					onCancelHide={() => {
						console.log('onCancelHide');
						this.setState({confirmVisible: !confirmVisible});
					}}
					okText={'好的'}
					cancelText={'不要啊'}
				/>
				
			</Layout>
		);
	}
}