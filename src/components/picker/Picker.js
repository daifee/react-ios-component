/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Portal from '../portal';
import Popup from '../popup';
import InlinePicker from './InlinePicker';
import {classNames} from '../util';

const prefix = 'picker';

/**
 * 弹窗选择器
 */
export default class Picker extends Component {

  /**
   * 构造函数
   * @param {Object} props 组件所使用的属性
   * @param {boolean} [props.visible] 弹窗选择器是否显示
   * @param {Object[]|string[]|number[]} props.optionsList 进行选择的数据列表
   * @param {number[]} [props.selectedList] 当前选中的数据列表项下标组成的数组
   * @param {string} [props.labelName='name'] 当可选择的数据列表的项是对象(obj)时，`obj[labelName]` 就是选择器显示的文案
   * @param {string} [props.nextName='childs'] 某个列表项的下一个选择列表数据多对应的 `key`
   * @param {PropTypes.node} [props.title] 弹窗标题
   * @param {PropTypes.node} [props.confirmText='确定'] 确认按钮文案
   * @param {PropTypes.node} [props.cancelText='取消'] 取消按钮文案
   * @param {function} props.onConfirm 确认按钮的函数回调
   * @param {function} [props.onCancel] 取消按钮的函数回调
   * @param {function} [props.onChange] 选中某一个项时触发的函数回调
   * @param {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedList: props.selectedList
    };
  }

  componentWillReceiveProps({selectedList}) {
    this.setState({selectedList});
  }

  _onCancel = (e) => {
    const {
      close,
      onCancel
    } = this.props;

    close && close();
    onCancel && onCancel(e);
  };

  _onChange = (selectedList) => {
    const {
      onChange
    } = this.props;

    this.setState({selectedList});
    onChange && onChange(selectedList);
  }

  _onConfirm = (e) => {
    const {
      close,
      onConfirm
    } = this.props;

    close && close();
    onConfirm && onConfirm(this.state.selectedList, e);
  };

  render() {
    let {
      visible,
      title,
      confirmText,
      cancelText,
      optionsList,
      selectedList,
      onConfirm,
      onCancel,
      labelName,
      nextName,
      close,
      className,
      ...rest
    } = this.props;
    const clazz = classNames(prefix, {
      [className]: className
    });
    const headerClazz = classNames(`${prefix}-header`);

    return (
      <Popup
        visible={visible}
        close={close}
        position='bottom'
      >
        <div className={clazz} {...rest}>
          <div className={headerClazz}>
            <a onClick={this._onCancel}>{cancelText}</a>
            <span>{title}</span>
            <a onClick={this._onConfirm}>{confirmText}</a>
          </div>
          <InlinePicker
            labelName={labelName}
            nextName={nextName}
            selectedList={this.state.selectedList}
            optionsList={optionsList}
            onChange={this._onChange}
          />
        </div>
      </Popup>
    );
  }
}

/**
 * 弹窗选择器组件的 API 调用方法
 * @param  {Object} props     @see Picker 组件属性
 * @param  {Node} container 弹窗选择器的容器节点
 */
Picker.show = (props, container) => {
  Portal.show(Picker, props, container);
};

Picker.propTypes = {
  selectedList: PropTypes.array.isRequired,
  optionsList: PropTypes.array.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.node,
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  close: PropTypes.func,
  labelName: PropTypes.string,
  nextName: PropTypes.string,
  className: PropTypes.string
};

Picker.defaultProps = {
  confirmText: '确定',
  cancelText: '取消'
};
