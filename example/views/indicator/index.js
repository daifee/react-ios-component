/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  Button,
  Indicator
} from 'component';

export default class IndicatorPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: true
    }
  }

  render() {
    const {
      history
    } = this.props;
    const {
      visible
    } = this.state;

    return (
      <Layout title="indicator" history={history}>
        <br/>

        <Button size="lg" onClick={() => {
          Indicator.show({
            icon: 'loading',
            content: '加载中...',
            timeout: 2000
          });
        }}>
          API 调用 Indicator
        </Button>
        
        <br/>
        {/**/}
        <Button size="lg" onClick={() => {
            this.setState({visible: !visible});
          }}
        >
          只有文案
        </Button>
        <Indicator icon="loading" visible={visible}>加载中...</Indicator>
      </Layout>
    );
  }
}