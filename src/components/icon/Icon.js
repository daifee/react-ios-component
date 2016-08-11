/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../util';

const prefix = 'icon-';

export default function Icon(props) {
  const {
    value,
    size,
    prefix,
    children,
    className,
    ...rest
  } = props;
  let clazz = {
    [prefix + value]: true,
    [className]: className
  };
  let style = {};

  if (size) {
    style = {
      width: size,
      height: size,
      fontSize: size
    };
  }

  return (
    <i className={classNames(clazz)} style={style} {...rest}>
      {children}
    </i>
  );
}

Icon.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
  prefix: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Icon.defaultProps = {
  prefix: prefix
};
