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
			hasHeader,
			title,
			okText,
			cancelText,
			optionsList,
			onConfirm,
			onCancel,
			className,
			children,
			...rest
		} = this.props;
		let clazz = classNames(prefix);
		let headerClazz = classNames(`${prefix}-header`);
		let bodyClazz = classNames(`${prefix}-body`);
		let optionsNodes = optionsList.map((options, i) => {
			return (
				<Options 
					options={options} 
					key={i} 
					onChange={(selectedIndex) => {

					}}
				/>
			);
		});

		return (
			<div className={clazz}>
				{hasHeader ? (
					<div className={headerClazz}>
						<a onClick={onCancel}>{cancelText}</a>
						<span>{title}</span>
						<a onClick={onConfirm}>{okText}</a>
					</div>
				) : null}
				<div className={bodyClazz}>
					{optionsNodes}
				</div>
			</div>
		);
	}
}

InlinePicker.propTypes = {
	hasHeader: PropTypes.bool,
	title: PropTypes.node,
	okText: PropTypes.node,
	cancelText: PropTypes.node,
	optionsList: PropTypes.array,
	onConfirm: PropTypes.func,
	onCancel: PropTypes.func
};

InlinePicker.defaultProps = {
	hasHeader: false,
	okText: '确定',
	cancelText: '取消',
	optionsList: [
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	]
};