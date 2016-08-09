/**
 * @author haw
 */

import {
  expect
} from 'chai';
import {
  classNames,
  generateOptions,
  indexOfOptions,
  date2str
} from '../../src/components/util';
import config from '../../src/components/util/config';
const {
  namespace
} = config;

describe('util 模块的公用方法', () => {

  // classNames
  it('classNames 方法返回拼装好的多个类名', () => {
    const clazz = classNames('page', ['scene', 'tabbar'], {
      navbar: 'navbar',
      search: true,
      btn: false
    });

    expect(clazz.indexOf(`${namespace}page`)).to.not.equal(-1);
    expect(clazz.indexOf(`${namespace}scene`)).to.not.equal(-1);
    expect(clazz.indexOf(`${namespace}tabbar`)).to.not.equal(-1);
    expect(clazz.indexOf(`navbar`)).to.not.equal(-1);
    expect(clazz.indexOf(`${namespace}search`)).to.not.equal(-1);
    expect(clazz.indexOf(`${namespace}btn`)).to.equal(-1);
  });

  // generateOptions
  it('generateOptions 生成日期时间的选择数据对象列表', () => {
    const min = 2000;
    const max = 2016;
    const unit = '年';
    const options = generateOptions(max, min, unit);

    expect(options.length).to.equal(max - min + 1);
    expect(options[0].name).to.equal(`${min}${unit}`);
    expect(options[max - min].value).to.equal(max);
  });

  // indexOfOptions
  it('indexOfOptions 返回当前值在日期时间的选择列表中的下标', () => {
    const options = [
      { name: '2010年', value: 2010 },
      { name: '2011年', value: 2011 },
      { name: '2012年', value: 2012 },
      { name: '2013年', value: 2013 },
      { name: '2014年', value: 2014 },
      { name: '2015年', value: 2015 },
      { name: '2016年', value: 2016 }
    ];

    expect(indexOfOptions(2014, options)).to.equal(4);
    expect(indexOfOptions(2017, options)).to.equal(options.length);
  });

  // date2str
  it('date2str 方法返回日期字符串', () => {
    const date = '2016-08-08';
    const dateStr = date2str(new Date(date));

    expect(dateStr).to.equal(date);
  });
});
