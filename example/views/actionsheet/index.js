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
  ActionSheet
} from 'component';

export default class ActionSheetPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
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
      <Layout title="actionsheet" history={history}>
        <br/>

        <Button size="lg" onClick={() => {
          ActionSheet.show({
            description: "title title title title title title title title title", 
            buttons: [
              {
                children: 'first btn'
              },
              {
                children: 'second btn',
                color: 'red'
              },
              {
                children: 'three btn',
                color: 'green'
              }
            ]
          });
        }}>
          API 调用 Alert
        </Button>
        
        <br/>
        {/**/}
        <Button size="lg" onClick={() => {
            this.setState({visible: !visible});
          }}>alert</Button>
        <ActionSheet 
          visible={visible}
          description="title title title title title title title title title" 
          buttons={[
            {
              children: 'ok btn',
              onClick: () => {
                // this.setState({visible: !visible});
              }
            }
          ]}
          onCancel={() => {
            // this.setState({visible: !visible});
          }}
          close={(e) => {
            this.setState({visible: false});
          }}
        />
      </Layout>
    );
  }
}