/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'cell-desc';

/**
 * 表格视图列表项的内容区中的描述区域
 * @param {Object} props 组件所使用的属性
 */
export default function CellDesc(props) {
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

CellDesc.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
