/**
 * @author haw
 */

import {
  Badge,
  Icon,
  NavBar,
  NavBarItem,
  Button,
  Segmented,
  TabBar,
  SearchBar,
  CellsTitle,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellDesc,
  CellFooter
} from '../src';
import './page';

function App(props) {
  return (
    <div className="rc-ios-page rc-ios-navbar-fixed rc-ios-tabbar-fixed">
      <NavBar>
        <NavBarItem>
          <Icon value="arrowforward" />
        </NavBarItem>
        <NavBarItem label="title" />
        <NavBarItem>
          <Icon value="arrowforward" />
          <Icon value="bookoutline" />
          <Button>保存</Button>
        </NavBarItem>
      </NavBar>
      <div className="rc-ios-content">
        <SearchBar />
        <div>
          <Badge>1</Badge>
          <Badge>6</Badge>
        </div>
        <Icon value="arrowforward" size="64px" />
        <span className="rc-ios-color-red">测试文字颜色</span>
        <Button size="lg">保存</Button>
        <Button size="lg" color="red">保存</Button>
        <Button size="lg" color="red" fill={true}>保存</Button>
        <Button size="lg" color="green" fill={true}>保存</Button>
        <br />
        <Segmented
          elements={[
            {
              active: true,
              children: '返回'
            },
            {
              children: '中间'
            },
            {
              children: '确定'
            }
          ]}
        />
        <br />
        <Segmented
          color={'red'}
          elements={[
            {
              children: '返回'
            },
            {
              active: true,
              children: '中间'
            },
            {
              children: '确定'
            },
            {
              children: '确定'
            }
          ]}
        />

        <CellsTitle>cells title</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>
              <Icon value="bookoutline" />
            </CellHeader>
            <CellBody>Wi-Fi</CellBody>
            <CellFooter>Design Code</CellFooter>
          </Cell>
          <Cell href="javascript:void(0);">
            <CellHeader>
              <Icon value="bookoutline" />
            </CellHeader>
            <CellBody>Bluetooth</CellBody>
            <CellFooter>On</CellFooter>
          </Cell>
          <Cell href="javascript:void(0);">
            <CellBody>
              <span>Changes</span>
              <CellDesc>the desc</CellDesc>
            </CellBody>
            <CellFooter>On</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>
              <Icon value="bookoutline" />
            </CellHeader>
            <CellBody>
              <span>Changes</span>
              <CellDesc>the desc</CellDesc>
            </CellBody>
            <CellFooter>On</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>
              <Icon value="bookoutline" />
            </CellHeader>
            <CellBody>
              <span>Changes</span>
              <CellDesc>the desc</CellDesc>
            </CellBody>
            <CellFooter>On</CellFooter>
          </Cell>
        </Cells>
      </div>
      <TabBar tabs={
        [
          {
            icon: 'home',
            label: 'home',
            text: '6',
            href: '',
            active: true
          },
          {
            icon: 'at',
            label: 'me',
            href: ''
          },
          {
            icon: 'settings',
            label: 'setting',
            text: '6',
            href: ''
          }
        ]
      }/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app-container'));

