/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import {
  Page,
  Icon,
  NavBar,
  NavBarItem
} from 'component';

export default function Layout(props) {
  const {
    history,
    title,
    hasNavBar = true,
    children,
    className = '',
    ...rest
  } = props;
  const cls = `page-demo ${className}`;

  return (
    <Page className={cls} hasNavBar={hasNavBar} {...rest}>
      <NavBar>
        <NavBarItem onClick={() => {
          history.goBack();
        }}>
          <Icon value='arrowback' />
        </NavBarItem>
        <NavBarItem label={title} />
        <NavBarItem />
      </NavBar>
      <div className='rc-ios-content'>
        {children}
      </div>
    </Page>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
  hasNavBar: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
