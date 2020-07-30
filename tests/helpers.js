/*
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;
*/
const Chai = require('chai');
const Adapter = require('enzyme-adapter-react-16');

require('enzyme').configure({ adapter: new Adapter() });

global.expect = Chai.expect;

