import React from 'react';
import { shallow,configure, mount, render  } from 'enzyme';
import Share from '../client/Components/Share.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Expect share to have correct class', () => {
  var share = shallow(<Share />);
  let icon = share.find('.share-icon');
  expect(share.hasClass('share')).toEqual(true);
})

test('Expect share icon to have correct class', () => {
  var share = shallow(<Share />);
  let icon = share.find('.share-icon');
  expect(icon.hasClass('share-icon')).toEqual(true);
})

test('Click event works', () => {
  let mock = jest.fn();
  let share = mount((<Share showShareBlock={mock} />));
  let shareInstance = share.instance();
  expect(share.state('share')).toBe(false);
  shareInstance.clickShare();
  expect(share.state('share')).toBe(true);
});