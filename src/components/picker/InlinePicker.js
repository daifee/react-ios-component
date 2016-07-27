/**
 * @author haw
 */

import React, {
	PropTypes,
	Component
} from 'react';
import Options from './Options';
import {classNames} from '../util';

const prefix = 'picker-body';

export default class InlinePicker extends Component {

	_onChange(selectedIndex, i) {
		const {
			selectedList,
			onChange
		} = this.props;
		let currentList = selectedList.map((value, index) => {
			if(index > i) {
				return 0;
			}
			return value;
		});
		currentList[i] = selectedIndex;
		onChange && onChange(currentList);
	}

	render() {
		const {
			selectedList,
			optionsList,
			labelName,
			nextName,
			onChange,
			className,
			children,
			...rest
		} = this.props;
		const clazz = classNames(prefix);
		let options = optionsList;
		const optionsNodes = selectedList.map((selectedIndex, i) => {
			options = i === 0 ? options : options[selectedList[i - 1]][nextName];

			if(!options) {
				return null;
			}
			return (
				<Options 
					selectedIndex={selectedIndex}
					options={options} 
					key={i} 
					labelName={labelName}
					onChange={(selectedIndex) => {
						this._onChange(selectedIndex, i);
					}}
				/>
			);
		});

		return (
			<div className={clazz} {...rest}>
				{optionsNodes}
			</div>
		);
	}
}

InlinePicker.propTypes = {
	labelName: PropTypes.string,
	nextName: PropTypes.string,
	selectedList: PropTypes.array.isRequired,
	optionsList: PropTypes.array.isRequired,
	onChange: PropTypes.func
};

InlinePicker.defaultProps = {
	nextName: 'childs'
};