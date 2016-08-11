/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  TabBar,
  TabBarItem,
  TabBarLabel,
  TabBarIcon
} from 'component';

export default class TabBarPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      index
    } = this.state;

    return (
      <Layout
        hasTabBar
        title='tabbar'
        history={history}
      >
        <div>
          <div style={{display: index === 0 ? 'block' : 'none'}}>home</div>
          <div style={{display: index === 1 ? 'block' : 'none'}}>contact</div>
          <div style={{display: index === 2 ? 'block' : 'none'}}>star</div>
          <div style={{display: index === 3 ? 'block' : 'none'}}>more</div>
        </div>
        {/*
        <TabBar activeColor='red'>
          <TabBarItem
            active={index === 0}
            onClick={() => {
              this.setState({
                index: 0
              });
            }}
          >
            <TabBarIcon icon='homeoutline' />
            <TabBarLabel>home</TabBarLabel>
          </TabBarItem>
          <TabBarItem
            active={index === 1}
            onClick={() => {
              this.setState({
                index: 1
              });
            }}
          >
            <TabBarIcon icon='contactoutline' />
            <TabBarLabel>contact</TabBarLabel>
          </TabBarItem>
          <TabBarItem
            active={index === 2}
            onClick={() => {
              this.setState({
                index: 2
              });
            }}
          >
            <TabBarIcon
              icon='staroutline'
              badge={3}
              badgeColor={'green'}
            />
            <TabBarLabel>star</TabBarLabel>
          </TabBarItem>
          <TabBarItem
            active={index === 3}
            onClick={() => {
              this.setState({
                index: 3
              });
            }}
          >
            <TabBarIcon
              icon='moreoutline'
              badge={1}
              badgeColor={'red'}
            />
            <TabBarLabel>more</TabBarLabel>
          </TabBarItem>
        </TabBar>
        */}

        <TabBar
          linkColor='gray'
          activeColor='red'
          tabs={[
            {
              icon: 'at',
              badge: 3,
              label: 'home',
              active: index === 0,
              badgeColor: 'red',
              onClick: () => {
                this.setState({
                  index: 0
                });
              }
            },
            {
              icon: 'contactoutline',
              label: 'contact',
              badgeColor: 'red',
              active: index === 1,
              onClick: () => {
                this.setState({
                  index: 1
                });
              }
            },
            {
              icon: 'staroutline',
              badge: 4,
              label: 'star',
              badgeColor: 'red',
              active: index === 2,
              onClick: () => {
                this.setState({
                  index: 2
                });
              }
            },
            {
              icon: 'moreoutline',
              badge: 3,
              label: 'more',
              badgeColor: 'red',
              active: index === 3,
              onClick: () => {
                this.setState({
                  index: 3
                });
              }
            }
          ]}
        />
      </Layout>
    );
  }
}

TabBarPage.propTypes = {
  history: PropTypes.object
};
