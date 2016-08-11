/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'textarea';

/**
 * 多行文本输入框
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.defaultValue=undefined] 多行文本输入框的默认值
 */
export default function Textarea(props) {
  const {
    className,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <textarea
      className={clazz}
      {...rest}
    ></textarea>
  );
}

Textarea.propTypes = {
  defaultValue: PropTypes.string,
  className: PropTypes.node
};

Textarea.defaultProps = {
  defaultValue: undefined
};
