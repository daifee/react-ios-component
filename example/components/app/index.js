/**
 * @author haw
 */

import React, {
  PropTypes,
  cloneElement
} from 'react';
import {
  Scene
} from 'component';

export default function App(props) {
  const {
    location,
    children
  } = props;

  return (
    <Scene animation={location.action}>
      {cloneElement(children, {
        key: location.pathname
      })}
    </Scene>
  );
}

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
};
