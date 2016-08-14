/**
 * @author haw
 */

import React from 'react';
import {
  Link
} from 'react-router';
import {
  Page,
  Icon
} from 'component';

export default function Home(props) {
  return (
    <Page>
      <header className='header'>
        <h1>IOS-UI</h1>
        <p>仿原生 ios 组件所设计的 web 组件</p>
      </header>
      <section className='body'>
        <div className='grids'>
          <Link className='grid' to='/button'>
            <Icon value='bookoutline' />
            <span>Button</span>
          </Link>
          <Link className='grid' to='/tabbar'>
            <Icon value='bookoutline' />
            <span>TabBar</span>
          </Link>
          <Link className='grid' to='/segmented'>
            <Icon value='bookoutline' />
            <span>Segmented</span>
          </Link>
          <Link className='grid' to='/cells'>
            <Icon value='bookoutline' />
            <span>Cells</span>
          </Link>
          <Link className='grid' to='/alert'>
            <Icon value='bookoutline' />
            <span>Alert</span>
          </Link>
          <Link className='grid' to='/actionsheet'>
            <Icon value='bookoutline' />
            <span>ActionSheet</span>
          </Link>
          <Link className='grid' to='/indicator'>
            <Icon value='bookoutline' />
            <span>Indicator</span>
          </Link>
          <Link className='grid' to='/searchbar'>
            <Icon value='bookoutline' />
            <span>SearchBar</span>
          </Link>
          <Link className='grid' to='/picker'>
            <Icon value='bookoutline' />
            <span>Picker</span>
          </Link>
          <Link className='grid' to='/datepicker'>
            <Icon value='bookoutline' />
            <span>DatePicker</span>
          </Link>
          <Link className='grid' to='/timepicker'>
            <Icon value='bookoutline' />
            <span>TimePicker</span>
          </Link>
          <Link className='grid' to='/'>
            <Icon value='bookoutline' />
            <span>null</span>
          </Link>
        </div>
      </section>
    </Page>
  );
}
