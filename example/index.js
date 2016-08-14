/**
 * @author haw
 * demo
 */

import React, {
  PropTypes,
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
import FastClick from 'fastclick';
import App from './components/app';
import Home from './components/home';
import ButtonPage from './views/button';
import TabBarPage from './views/tabbar';
import SegmentedPage from './views/segmented';
import CellsPage from './views/cells';
import AlertPage from './views/alert';
import ActionSheetPage from './views/actionsheet';
import IndicatorPage from './views/indicator';
import SearchBarPage from './views/searchbar';
import PickerPage from './views/picker';
import DatePickerPage from './views/datepicker';
import TimePickerPage from './views/timepicker';
import './style';

FastClick.attach(document.body);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='button' component={ButtonPage} />
      <Route path='tabbar' component={TabBarPage} />
      <Route path='segmented' component={SegmentedPage} />
      <Route path='cells' component={CellsPage} />
      <Route path='alert' component={AlertPage} />
      <Route path='actionsheet' component={ActionSheetPage} />
      <Route path='indicator' component={IndicatorPage} />
      <Route path='searchbar' component={SearchBarPage} />
      <Route path='picker' component={PickerPage} />
      <Route path='datepicker' component={DatePickerPage} />
      <Route path='timepicker' component={TimePickerPage} />
    </Route>
  </Router>
), document.getElementById('app-container'));
