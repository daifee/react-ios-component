/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Options from './Options';
import {classNames} from '../util';

const prefix = 'picker';

export default class InlinePicker extends Component {

	render() {
		const {
			title,
			okText,
			cancelText,
			optionsList,
			className,
			children,
			...rest
		} = this.props;
		let clazz = classNames(prefix);
		let headerClazz = classNames(`${prefix}-header`);
		let bodyClazz = classNames(`${prefix}-body`);
		let optionsNodes = optionsList.map((options, i) => {
			return (
				<Options options={options} key={i} />
			);
		});

		return (
			<div className={clazz}>
				<div className={headerClazz}>
					<a>{cancelText}</a>
					<span>{title}</span>
					<a>{okText}</a>
				</div>
				<div className={bodyClazz}>
					{optionsNodes}
				</div>
			</div>
		);
	}
}

InlinePicker.propTypes = {
	title: PropTypes.node,
	okText: PropTypes.node,
	cancelText: PropTypes.node,
	optionsList: PropTypes.array
};

InlinePicker.defaultProps = {
	okText: '确定',
	cancelText: '取消',
	optionsList: [
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	]
};