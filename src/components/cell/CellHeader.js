/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell-header';

/**
 * 表格视图列表项的头部
 * @param {Object} props 组件所使用的属性
 */
export default function CellHeader(props) {
  const {
    className,
    children,
    ...rest
  } = props;
  let clazz = classNames(prefix, {
    [className]: className
  });

  return (
    <div className={clazz} {...rest}>
      {children}
    </div>
  );
}

CellHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
