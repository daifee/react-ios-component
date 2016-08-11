/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'input';

/**
 * 文本输入框
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.type='text'] 文本框类型
 * @param {string} [props.defaultValue=undefined] 文本框的默认值
 */
export default function Input(props) {
  const {
    type,
    className,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <input
      className={clazz}
      type={type}
      {...rest}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  defaultValue: undefined
};
