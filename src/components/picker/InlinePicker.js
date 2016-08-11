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

/**
 * 內联选择器
 */
export default class InlinePicker extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {Object[]|string[]|number[]} props.optionsList 进行选择的数据列表
   * @param {string} [props.labelName='name'] 当可选择的数据列表的项是对象(obj)时，`obj[labelName]` 就是选择器显示的文案
   * @param {string} [props.nextName='childs'] 某个列表项的下一个选择列表数据多对应的 `key`
   * @param {number[]} [props.selectedList] 当前选中的数据列表项下标组成的数组
   * @param {function} props.onChange 选中某一个项时触发的函数回调
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);
  }

  _onChange(selectedIndex, i) {
    const {
      selectedList,
      onChange
    } = this.props;
    let currentList = selectedList.map((value, index) => {
      if (index > i) {
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
      className,
      ...rest
    } = this.props;
    const clazz = classNames(prefix, {
      [className]: className
    });
    let options = optionsList;
    const optionsNodes = selectedList.map((selectedIndex, i) => {
      options = i === 0 ? options : options[selectedList[i - 1]][nextName];

      if (!options) {
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
  onChange: PropTypes.func,
  className: PropTypes.string
};

InlinePicker.defaultProps = {
  nextName: 'childs'
};
