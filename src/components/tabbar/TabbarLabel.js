/**
 * @author haw
 * 标签栏
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'tabbar-label';

/**
 * 标签项文案
 * @param {Object} props 组件所使用的属性
 * @param {string} [props.label] 标签项的文案
 */
export default function TabBarLabel(props) {
  const {
    label,
    className,
    children,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <div className={clazz} {...rest}>{children || label}</div>
  );
}

TabBarLabel.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
