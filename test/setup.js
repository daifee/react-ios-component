
import React from 'react';
import {
	expect
} from 'chai';
import {
	shallow,
	mount,
	render
} from 'enzyme';
import {
	jsdom
} from 'jsdom';
import config from '../src/components/util/config';
const {
  namespace
} = config;
const exposedProps = ['window', 'navigator', 'document'];
const extensions = ['.css', '.scss', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.eot', '.ttf', '.woff'];
const noop = () => {};

// for convenient usage
global.React = React;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.namespace = namespace;

// ignore other resources
extensions.forEach(ext => {
	require.extensions[ext] = noop;
});

// 模拟浏览器环境
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(prop => {
	if(typeof global[prop] === 'undefined') {
		exposedProps.push(prop);
    global[prop] = document.defaultView[prop];
	}
});
global.navigator = {
	userAgent: 'node.js'
};