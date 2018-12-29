import React from 'react';
import { shallow,configure, mount, render  } from 'enzyme';
import Share from '../client/Components/Share.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Expect share to change color', () => {
  var share = shallow(<Share />);
  expect(share.hasClass('share')).toEqual(true);
})

