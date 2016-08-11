/**
 * @author haw
 */

import React, {
  PropTypes,
  Component
} from 'react';
import Layout from '../../components/layout';
import {
  Icon,
  CellsTitle,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellDesc,
  CellFooter,
  Checkbox,
  Radio,
  Input,
  Switch,
  Textarea,
  Stepper,
  Slider
} from 'component';

export default class SegmentedPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      stepValue: 0,
      sliderValue: 0,
    };
  }

  render() {
    const {
      history
    } = this.props;
    const {
      stepValue,
      sliderValue
    } = this.state;

    return (
      <Layout
        className="rc-ios-tabbar-fixed"
        title="cells"
        history={history}
      >
        <CellsTitle>cells</CellsTitle>
        <Cells>
          <Cell>label</Cell>
          <Cell>
            <CellHeader>
              <Icon value="settings"></Icon>
            </CellHeader>
            <CellBody>body</CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
          <Cell component="a">
            <CellHeader>icon</CellHeader>
            <CellBody>body</CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
          <Cell component="a">
            <CellHeader>icon</CellHeader>
            <CellBody>
              <span>Changes</span>
              <CellDesc>the desc the desc the desc the desc the desc</CellDesc>
            </CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>stepper</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>我是 {stepValue}</CellBody>
            <CellFooter>
              <Stepper
                value={stepValue}
                min={0}
                max={10}
                onChange={(current, preValue, step) => {
                  this.setState({
                    stepValue: current
                  })
                }}
              />
            </CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>Slider</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>我是{sliderValue}</CellHeader>
            <CellBody>
              <Slider 
                value={sliderValue} 
                onChange={(value) => {
                  this.setState({sliderValue: parseInt(value)});
                }}/>
            </CellBody>
          </Cell>
          <Cell>
            <CellHeader>我是20</CellHeader>
            <CellBody>
              <Slider 
                value={20} 
                disabled={true}
                onChange={(value) => {
                  
                }}/>
            </CellBody>
          </Cell>
        </Cells>

        <CellsTitle>switch</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>我是标题</CellBody>
            <CellFooter>
              <Switch />
            </CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>checkbox</CellsTitle>
        <Cells>
          <Cell component="label" htmlFor="checkbox1">
            <CellHeader>
              <Checkbox id="checkbox1" name="checkbox" defaultChecked/>
            </CellHeader>
            <CellBody>我是标题</CellBody>
          </Cell>
          <Cell component="label" htmlFor="checkbox2">
            <CellHeader>
              <Checkbox id="checkbox2" name="checkbox" />
            </CellHeader>
            <CellBody>我是标题</CellBody>
          </Cell>
        </Cells>

        <CellsTitle>radio</CellsTitle>
        <Cells>
          <Cell component="label">
            <CellHeader>
              <Radio name="radio" defaultChecked/>
            </CellHeader>
            <CellBody>我是标题</CellBody>
          </Cell>
          <Cell component="label">
            <CellHeader>
              <Radio name="radio" />
            </CellHeader>
            <CellBody>我是标题</CellBody>
          </Cell>
        </Cells>

        <CellsTitle>input</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>手机号码</CellHeader>
            <CellBody>
              <Input placeholder="请输入手机号码" />
            </CellBody>
          </Cell>
        </Cells>

        <CellsTitle>textarea</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <Textarea placeholder="请输入手机号码" />
            </CellBody>
          </Cell>
        </Cells>
      </Layout>
    );
  }

}