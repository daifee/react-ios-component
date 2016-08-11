/**
 * @author haw
 */

import React, {
  PropTypes
} from 'react';
import Layout from '../../components/layout';
import {
  Button
} from 'component';

export default function ButtonPage(props) {
  return (
    <Layout title='button' history={props.history}>
      <br />
      <Button>保存</Button>
      <Button fill>保存</Button>
      <Button color='red'>保存</Button>
      <Button color='red' fill>保存</Button>
      <Button color='gray'>保存</Button>
      <Button fill color='gray'>保存</Button>

      <br />
      <br />
      <Button size='lg'>保存</Button>
      <br />
      <Button size='lg' color='red'>保存</Button>
      <br />
      <Button size='lg' color='red' fill>保存</Button>
      <br />
      <Button size='lg' color='green' fill>保存</Button>
      <br />
      <Button size='lg' color='green' fill disabled>保存</Button>
    </Layout>
  );
}

ButtonPage.propTypes = {
  history: PropTypes.object
};
