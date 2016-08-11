/**
 * @author haw
 * 标签栏
 */

import React, {
  PropTypes
} from 'react';
import config from '../util/config';
import {classNames} from '../util';
import TabbarIcon from './TabbarIcon';
import TabbarLabel from './TabbarLabel';

const prefix = 'tabbar-item';

/**
 * 标签项
 * @param {Object} props 组件所使用的属性
 * @param {string|PropTypes.element|function} [props.component='a'] 标签项的 `html` 包裹元素
 * @param {string} [props.icon] 标签项图标
 * @param {string} [props.badge] 徽章的文案
 * @param {string} [props.linkColor='gray'] 每个标签栏项的字体颜色
 * @param {string} [props.badgeColor='red'] 徽章的背景颜色
 * @param {string} [props.activeColor=''] 每个标签栏项被激活时的字体颜色，默认为主题颜色
 * @param {string} [props.active=false] 标签项是否激活
 */
export default function TabBarItem(props) {
  const {
    icon,
    badge,
    label,
    active,
    linkColor,
    activeColor,
    badgeColor,
    component,
    className,
    children,
    ...rest
  } = props;
  const Component = component;
  const theme = active ? activeColor : linkColor;
  let clazz = classNames(prefix, {
    [`color-${theme}`]: !!theme,
    [className]: className
  });
  let labelClazz = classNames('tabbar-label');

  return (
    <Component className={clazz} {...rest}>
      {icon ? (
        <TabbarIcon
          icon={icon}
          badge={badge}
          badgeColor={badgeColor}
        />
      ) : null}
      {label ? (
        <TabbarLabel className={labelClazz}>{label}</TabbarLabel>
      ) : null}
      {!icon && !label ? children : null}
    </Component>
  );
}

TabBarItem.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  icon: PropTypes.string,
  badge: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  label: PropTypes.node,
  linkColor: PropTypes.oneOf(config.colors),
  badgeColor: PropTypes.oneOf(config.colors),
  activeColor: PropTypes.oneOf(config.colors),
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

TabBarItem.defaultProps = {
  component: 'a',
  linkColor: 'gray',
  badgeColor: 'red',
  activeColor: '',
  active: false
};
