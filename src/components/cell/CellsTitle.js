/**
 * @author haw
 * 表格视图
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cells-title';

/**
 * 表格视图的标题
 * @param {Object} props 组件所使用的属性
 */
export default function CellsTitle(props) {
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

CellsTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
