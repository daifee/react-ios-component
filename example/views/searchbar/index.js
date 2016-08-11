/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  SearchBar,
  SearchBarHeader,
  SearchBarInput,
  SearchBarFooter
} from 'component';

export default class SearchBarPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      firstValue: ''
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      firstValue
    } = this.state;

    return (
      <Layout title='searchbar' history={history}>
        <div style={{background: '#000'}}>
          <SearchBar theme='white'>
            <SearchBarHeader>label</SearchBarHeader>
            <SearchBarInput
              value={firstValue}
              placeholder='search'
              hasClear
              onClear={(e) => {
                console.log(e);
                this.setState({firstValue: ''});
              }}
              onChange={(e, value) => {
                this.setState({firstValue: value});
              }}
            />
            <SearchBarFooter onClick={() => {
              this.setState({firstValue: ''});
            }}>取消</SearchBarFooter>
          </SearchBar>
        </div>
        <br />
        <SearchBar>
          <SearchBarInput placeholder='search' />
          <SearchBarFooter>取消</SearchBarFooter>
        </SearchBar>
        <br />
        <SearchBar>
          <SearchBarInput hasFooter={false} placeholder='search' />
        </SearchBar>
      </Layout>
    );
  }
}

SearchBarPage.propTypes = {
  history: PropTypes.object
};
