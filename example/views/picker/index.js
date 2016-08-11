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
  InlinePicker,
  Picker
} from 'component';

export default class PickerPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.addressList = [{
      name: '广东',
      childs: [{
        name: '广州',
        childs: ['天河', '海珠', '越秀', '番禺', '黄埔', '白云', '花都', '从化']
      }, {
        name: '深圳',
        childs: ['罗湖', '福田', '南山', '宝安', '石岩', '观塘']
      }]
    }, {
      name: '广东',
      childs: [{
        name: '广州',
        childs: ['天河', '海珠', '越秀', '番禺', '黄埔', '白云', '花都', '从化']
      }]
    }, {
      name: '广东',
      childs: [{
        name: '广州',
        childs: ['天河', '海珠', '越秀', '番禺', '黄埔', '白云', '花都', '从化']
      }]
    }];

    this.state = {
      address: [0, 1, 0]
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      address
    } = this.state;

    return (
      <Layout title='picker' history={history}>
        <br />
        <InlinePicker
          labelName={'name'}
          nextName={'childs'}
          selectedList={address}
          optionsList={this.addressList}
          onChange={(selectedList) => {
            this.setState({
              address: selectedList
            });
          }}
        />
        <br />
        <Button size='lg' onClick={() => {
          Picker.show({
            selectedList: address,
            optionsList: this.addressList,
            onConfirm: (selectedList) => {
              this.setState({
                address: selectedList
              });
            }
          });
        }}>
          API 调用 Picker
        </Button>
      </Layout>
    );
  }
}

PickerPage.propTypes = {
  history: PropTypes.object
};
