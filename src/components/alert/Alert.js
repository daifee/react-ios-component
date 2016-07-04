/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Animate from '../animate';
import Mask from '../mask';
import AlertHeader from './AlertHeader';
import AlertBody from './AlertBody';
import AlertFooter from './AlertFooter';
import AlertButton from './AlertButton';
import {classNames} from '../util';

const prefix = 'alert';

export default class Alert extends Component {

	render() {
		const {
			title,
			body,
			buttons,
			className,
			children,
			...rest
		} = this.props;
		let clazz = classNames(prefix, {
			[className]: className
		});
		const buttonEls = buttons.map((btnProps, i) => {
			return (
				<AlertButton {...btnProps} key={i} />
			);
		})

		return (
			<Mask>
				<div className={clazz} {...rest}>
					<AlertHeader>{title}</AlertHeader>
					<AlertBody>{body}</AlertBody>
					<AlertFooter>
						{buttonEls}
					</AlertFooter>
				</div>
			</Mask>
		);
	}

} 