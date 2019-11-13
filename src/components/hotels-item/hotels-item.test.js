import React from 'react';
import renderer from 'react-test-renderer';
import HotelsItem from './hotels-item';

it(`HotelsItem correctly renders after launch`, () => {
  const tree = renderer.create(<HotelsItem
    key={0}
    id={0}
    name={`test_name`}
    price={0}
    type={`test_type`}
    image={`test_image_url`}
    status={`test_status`}
    rating={0}
    link={`test_link`}
    goToHotel={jest.fn()}
    addActiveHotel={jest.fn()}
    removeActiveHotel={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
