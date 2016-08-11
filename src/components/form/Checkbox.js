/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'checkbox';

/**
 * 复选框
 * @param {Object} props 组件所使用的属性
 */
export default function Checkbox(props) {
  const {
    className,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <input
      className={clazz}
      {...rest}
      type='checkbox'
    />
  );
}

Checkbox.propTypes = {
  className: PropTypes.string
};
