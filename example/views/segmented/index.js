/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  Segmented
} from 'component';

export default class SegmentedPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      smallIndex: 0
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      index,
      smallIndex
    } = this.state;

    return (
      <Layout
        className="rc-ios-tabbar-fixed"
        title="segmented"
        history={history}
      >
        <Segmented 
          color="red" 
          elements={[
            {
              active: index === 0,
              children: 'home',
              onClick: () => {
                this.setState({index: 0});
              }
            },
            {
              active: index === 1,
              children: 'contact',
              onClick: () => {
                this.setState({index: 1});
              }
            },
            {
              active: index === 2,
              children: 'star',
              onClick: () => {
                this.setState({index: 2});
              }
            },
            {
              active: index === 3,
              children: 'setting',
              onClick: () => {
                this.setState({index: 3});
              }
            }
          ]}
        />
        <div>
          <div style={{display: index === 0 ? 'block' : 'none'}}>home</div>
          <div style={{display: index === 1 ? 'block' : 'none'}}>contact</div>
          <div style={{display: index === 2 ? 'block' : 'none'}}>star</div>
          <div style={{display: index === 3 ? 'block' : 'none'}}>more</div>
        </div>

        <br />
        <br />
        <br />
        <div>更小的</div>
        <Segmented 
          size="small"
          elements={[
            {
              active: smallIndex === 0,
              children: 'home',
              onClick: () => {
                this.setState({smallIndex: 0});
              }
            },
            {
              active: smallIndex === 1,
              children: 'contact',
              onClick: () => {
                this.setState({smallIndex: 1});
              }
            },
            {
              active: smallIndex === 2,
              children: 'star',
              onClick: () => {
                this.setState({smallIndex: 2});
              }
            },
            {
              active: smallIndex === 3,
              children: 'setting',
              onClick: () => {
                this.setState({smallIndex: 3});
              }
            }
          ]}
        />
        <div>
          <div style={{display: smallIndex === 0 ? 'block' : 'none'}}>home</div>
          <div style={{display: smallIndex === 1 ? 'block' : 'none'}}>contact</div>
          <div style={{display: smallIndex === 2 ? 'block' : 'none'}}>star</div>
          <div style={{display: smallIndex === 3 ? 'block' : 'none'}}>more</div>
        </div>
      </Layout>
    );
  }

}